import express from "express";
import {
  createComplaint,
  getComplaints,
  updateComplaintStatus,
} from "../controllers/complaintController.js";

import { protect, requireRole } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, createComplaint);
router.get("/", protect, getComplaints);
router.patch(
  "/:id/status",
  protect,
  requireRole("admin"),
  updateComplaintStatus
);

export default router;