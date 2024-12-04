
import { Request, Response } from "express";
import * as PartnerService from "../services/PartnerServices";

// Create a new Partner
export const createPartner = async (req: Request, res: Response) => {
  try {
    const partnerData = req.body;
    const newPartner = await PartnerService.createPartner(partnerData);
    res.status(201).json({ success: true, data: newPartner });
  } catch (error) {
    console.error("Error creating partner:", error);
    res.status(500).json({ success: false, message: "Failed to create partner" });
  }
};

// Fetch all Partners
export const fetchPartners = async (req: Request, res: Response) => {
  try {
    const partners = await PartnerService.fetchAllPartners();
    res.status(200).json({ success: true, data: partners });
  } catch (error) {
    console.error("Error fetching partners:", error);
    res.status(500).json({ success: false, message: "Failed to fetch partners" });
  }
};

// Fetch a Partner by ID
export const fetchPartnerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const partner = await PartnerService.fetchPartnerById(id);
    if (!partner) {
 res.status(404).json({ success: false, message: "Partner not found" });
    }
    res.status(200).json({ success: true, data: partner });
  } catch (error) {
    console.error("Error fetching partner:", error);
    res.status(500).json({ success: false, message: "Failed to fetch partner" });
  }
};

// Update a Partner
export const updatePartner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedPartner = await PartnerService.updatePartner(id, updatedData);
    if (!updatedPartner) {
 res.status(404).json({ success: false, message: "Partner not found" });
    }
    res.status(200).json({ success: true, data: updatedPartner });
  } catch (error) {
    console.error("Error updating partner:", error);
    res.status(500).json({ success: false, message: "Failed to update partner" });
  }
};
