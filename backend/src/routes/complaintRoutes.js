// import express from "express";
// import {
//   createComplaint,
//   getMyComplaints,
//   getAllComplaints
// } from "../controllers/complaintController.js";

// import { protect } from "../middleware/auth.js";

// const router = express.Router();

// router.post("/", protect, createComplaint);
// router.get("/my", protect, getMyComplaints);
// router.get("/", protect, getAllComplaints);

// export default router;

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