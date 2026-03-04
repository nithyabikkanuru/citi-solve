import Complaint from "../models/Complaint.js";

// CREATE
export const createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET (Admin = all, Citizen = own)
export const getComplaints = async (req, res) => {
  try {
    let complaints;

    if (req.user.role === "admin") {
      complaints = await Complaint.find().populate("user", "name email");
    } else {
      complaints = await Complaint.find({ user: req.user._id });
    }

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE STATUS (Admin only)
export const updateComplaintStatus = async (req, res) => {
  try {
    const { status, resolutionNote } = req.body;

    if (status === "Resolved" && !resolutionNote) {
      return res
        .status(400)
        .json({ message: "Resolution note is required" });
    }

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status, resolutionNote },
      { new: true }
    );

    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};