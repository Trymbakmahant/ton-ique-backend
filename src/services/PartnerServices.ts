import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function createPartner(partnerData : any ) {
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
  } catch (error) {
    console.error('Error creating Partner:', error);
    throw new Error('Unable to create Partner');
  }
}


export async function fetchAllPartners() {
  try {
    const partners = await prisma.partner.findMany({
      include: { menu: true }, // Include related Menu items
    });

    return partners;
  } catch (error) {
    console.error('Error fetching Partners:', error);
    throw new Error('Unable to fetch Partners');
  }
}


export async function fetchPartnerById(partnerId : any ) {
  try {
    const partner = await prisma.partner.findUnique({
      where: { id: partnerId },
      include: { menu: true },
    });

    return partner;
  } catch (error) {
    console.error('Error fetching Partner by ID:', error);
    throw new Error('Unable to fetch Partner');
  }
}


export async function updatePartner(partnerId : string, updateData : any) {
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
          create: menu,   // Add new menu items
        },
      },
      include: { menu: true },
    });

    return updatedPartner;
  } catch (error) {
    console.error('Error updating Partner:', error);
    throw new Error('Unable to update Partner');
  }
}
