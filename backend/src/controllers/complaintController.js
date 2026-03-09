import Complaint from "../models/Complaint.js";

// CREATE COMPLAINT
export const createComplaint = async (req, res) => {
  try {
    console.log("POST /api/complaints reached", req.body);

    const complaint = await Complaint.create({
      ...req.body,
      user: req.user ? req.user._id : null,
      status: "Pending",
    });

    res.status(201).json(complaint);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};


// GET COMPLAINTS
export const getComplaints = async (req, res) => {
  try {
    let complaints;

    if (req.user && req.user.role === "admin") {
      complaints = await Complaint.find().populate("user", "name email");
    } else if (req.user) {
      complaints = await Complaint.find({ user: req.user._id });
    } else {
      complaints = await Complaint.find();
    }

    res.json(complaints);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};


// UPDATE COMPLAINT STATUS
export const updateComplaintStatus = async (req, res) => {
  try {
    const { status, resolutionNote } = req.body;

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    complaint.status = status;

    if (resolutionNote) {
      complaint.resolutionNote = resolutionNote;
    }

    const updatedComplaint = await complaint.save();

    res.json(updatedComplaint);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
