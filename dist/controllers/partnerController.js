"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePartner = exports.fetchPartnerById = exports.fetchPartners = exports.createPartner = void 0;
const PartnerService = __importStar(require("../services/PartnerServices"));
// Create a new Partner
const createPartner = async (req, res) => {
    try {
        const partnerData = req.body;
        const newPartner = await PartnerService.createPartner(partnerData);
        res.status(201).json({ success: true, data: newPartner });
    }
    catch (error) {
        console.error("Error creating partner:", error);
        res.status(500).json({ success: false, message: "Failed to create partner" });
    }
};
exports.createPartner = createPartner;
// Fetch all Partners
const fetchPartners = async (req, res) => {
    try {
        const partners = await PartnerService.fetchAllPartners();
        res.status(200).json({ success: true, data: partners });
    }
    catch (error) {
        console.error("Error fetching partners:", error);
        res.status(500).json({ success: false, message: "Failed to fetch partners" });
    }
};
exports.fetchPartners = fetchPartners;
// Fetch a Partner by ID
const fetchPartnerById = async (req, res) => {
    try {
        const { id } = req.params;
        const partner = await PartnerService.fetchPartnerById(id);
        if (!partner) {
            res.status(404).json({ success: false, message: "Partner not found" });
        }
        res.status(200).json({ success: true, data: partner });
    }
    catch (error) {
        console.error("Error fetching partner:", error);
        res.status(500).json({ success: false, message: "Failed to fetch partner" });
    }
};
exports.fetchPartnerById = fetchPartnerById;
// Update a Partner
const updatePartner = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedPartner = await PartnerService.updatePartner(id, updatedData);
        if (!updatedPartner) {
            res.status(404).json({ success: false, message: "Partner not found" });
        }
        res.status(200).json({ success: true, data: updatedPartner });
    }
    catch (error) {
        console.error("Error updating partner:", error);
        res.status(500).json({ success: false, message: "Failed to update partner" });
    }
};
exports.updatePartner = updatePartner;
