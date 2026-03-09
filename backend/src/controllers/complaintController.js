// import Complaint from "../models/Complaint.js";

// /* Create Complaint */
// export const createComplaint = async (req, res) => {
//   try {
//     const complaint = new Complaint({
//       user: req.user._id,
//       complaintId: Math.random().toString(36).substring(2, 8),
//       category: req.body.category,
//       description: req.body.description,
//       photo: req.body.photo || null,
//       status: "Pending"
//     });

//     const savedComplaint = await complaint.save();

//     res.status(201).json(savedComplaint);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// /* Citizen → Get their complaints */
// export const getMyComplaints = async (req, res) => {
//   try {
//     const complaints = await Complaint.find({ user: req.user._id });

//     res.status(200).json(complaints);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// /* Admin → Get all complaints */
// export const getAllComplaints = async (req, res) => {
//   try {
//     const complaints = await Complaint.find().populate("user", "name email");

//     res.status(200).json(complaints);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// import Complaint from "../models/Complaint.js";

// // CREATE COMPLAINT
// export const createComplaint = async (req, res) => {
//   try {
//     console.log("POST /api/complaints reached", req.body);

//     const complaint = await Complaint.create({
//       ...req.body,
//       user: req.user ? req.user._id : null,
//       status: "Pending"
//     });

//     res.status(201).json(complaint);
//   } catch (error) {
//     console.log("ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };


// // GET COMPLAINTS
// // Admin → see all complaints
// // Citizen → see only their complaints
// export const getComplaints = async (req, res) => {
//   try {
//     let complaints;

//     if (req.user && req.user.role === "admin") {
//       complaints = await Complaint.find().populate("user", "name email");
//     } else if (req.user) {
//       complaints = await Complaint.find({ user: req.user._id });
//     } else {
//       complaints = await Complaint.find();
//     }

//     res.json(complaints);
//   } catch (error) {
//     console.log("ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };


// // UPDATE COMPLAINT STATUS (Admin)
// export const updateComplaintStatus = async (req, res) => {
//   try {
//     const { status, resolutionNote } = req.body;

//     if (status === "Resolved" && !resolutionNote) {
//       return res
//         .status(400)
//         .json({ message: "Resolution note is required" });
//     }

//     const complaint = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status, resolutionNote },
//       { new: true }
//     );

//     if (!complaint) {
//       return res.status(404).json({ message: "Complaint not found" });
//     }

//     res.json(complaint);
//   } catch (error) {
//     console.log("ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

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