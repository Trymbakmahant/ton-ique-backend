"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPartner = createPartner;
exports.fetchAllPartners = fetchAllPartners;
exports.fetchPartnerById = fetchPartnerById;
exports.updatePartner = updatePartner;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createPartner(partnerData) {
    const { name, location, tableLayout, timings, menu } = partnerData;
    try {
        const newPartner = await prisma.partner.create({
            data: {
                name,
                location,
                tableLayout,
                timings,
                menu: {
                    create: menu, // Creates menu items
                },
            },
        });
        return newPartner;
    }
    catch (error) {
        console.error('Error creating Partner:', error);
        throw new Error('Unable to create Partner');
    }
}
async function fetchAllPartners() {
    try {
        const partners = await prisma.partner.findMany({
            include: { menu: true }, // Include related Menu items
        });
        return partners;
    }
    catch (error) {
        console.error('Error fetching Partners:', error);
        throw new Error('Unable to fetch Partners');
    }
}
async function fetchPartnerById(partnerId) {
    try {
        const partner = await prisma.partner.findUnique({
            where: { id: partnerId },
            include: { menu: true },
        });
        return partner;
    }
    catch (error) {
        console.error('Error fetching Partner by ID:', error);
        throw new Error('Unable to fetch Partner');
    }
}
async function updatePartner(partnerId, updateData) {
    const { name, location, tableLayout, timings, menu } = updateData;
    try {
        const updatedPartner = await prisma.partner.update({
            where: { id: partnerId },
            data: {
                name,
                location,
                tableLayout,
                timings,
                menu: {
                    deleteMany: {}, // Delete existing menu items
                    create: menu, // Add new menu items
                },
            },
            include: { menu: true },
        });
        return updatedPartner;
    }
    catch (error) {
        console.error('Error updating Partner:', error);
        throw new Error('Unable to update Partner');
    }
}
