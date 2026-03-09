// const mongoose = require("mongoose");
// const { nanoid } = require("nanoid");
// import mongoose from "mongoose";
// import { nanoid } from "nanoid";

// const complaintSchema = new mongoose.Schema(
//   {
//     complaintId: {
//       type: String,
//       default: () => nanoid(6),
//       unique: true,
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     name: String,
//     ward: String,
//     location: String,
//     category: String,
//     description: String,
//     photo: String,
//     status: {
//       type: String,
//       enum: ["Pending", "In Progress", "Resolved"],
//       default: "Pending",
//     },
//     resolutionNote: String,
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Complaint", complaintSchema);
// import mongoose from "mongoose";
// import { nanoid } from "nanoid";

// const complaintSchema = new mongoose.Schema(
//   {
//     complaintId: {
//       type: String,
//       default: () => nanoid(6),
//       unique: true,
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     name: String,
//     ward: String,
//     location: String,
//     category: String,
//     description: String,
//     photo: String,
//     status: {
//       type: String,
//       enum: ["Pending", "In Progress", "Resolved"],
//       default: "Pending",
//     },
//     resolutionNote: String,
//   },
//   { timestamps: true }
// );

// const Complaint = mongoose.model("Complaint", complaintSchema);

// export default Complaint;

// import mongoose from "mongoose";

// const complaintSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     complaintId: {
//       type: String,
//       required: true,
//     },

//     category: {
//       type: String,
//       required: true,
//     },

//     description: {
//       type: String,
//       required: true,
//     },

//     photo: {
//       type: String,
//       default: null,
//     },

//     status: {
//       type: String,
//       enum: ["Pending", "Resolved"],
//       default: "Pending",
//     },

//     resolutionNote: {
//       type: String,
//       default: "",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Complaint", complaintSchema);
// const mongoose = require("mongoose");
// const { nanoid } = require("nanoid");
// import mongoose from "mongoose";
// import { nanoid } from "nanoid";

// const complaintSchema = new mongoose.Schema(
//   {
//     complaintId: {
//       type: String,
//       default: () => nanoid(6),
//       unique: true,
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     name: String,
//     ward: String,
//     location: String,
//     category: String,
//     description: String,
//     photo: String,
//     status: {
//       type: String,
//       enum: ["Pending", "In Progress", "Resolved"],
//       default: "Pending",
//     },
//     resolutionNote: String,
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Complaint", complaintSchema);
import mongoose from "mongoose";
import { nanoid } from "nanoid";

const complaintSchema = new mongoose.Schema(
  {
    complaintId: {
      type: String,
      default: () => nanoid(6),
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: String,
    ward: String,
    location: String,
    category: String,
    description: String,
    photo: String,
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved"],
      default: "Pending",
    },
    resolutionNote: String,
  },
  { timestamps: true }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;