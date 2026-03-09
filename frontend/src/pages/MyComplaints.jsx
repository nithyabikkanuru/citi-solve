// // // iimport React, { useEffect, useState } from "react";
// // import React, { useState, useEffect } from "react";
// // import { complaintsAPI } from "../services/api";


// // const MyComplaints = () => {
// //   const [complaints, setComplaints] = useState([]);

// //   useEffect(() => {
// //     const fetchComplaints = async () => {
// //       const data = await complaintsAPI.getMyComplaints();
// //       setComplaints(data);
// //     };

// //     fetchComplaints();
// //   }, []);

// //   return (
// //     <div>
// //       <h2>My Complaints</h2>

// //       {complaints.map((complaint) => (
// //         <div key={complaint._id} className="complaint-card">

// //           <h3>Complaint ID: {complaint.complaintId}</h3>

// //           <p><strong>Category:</strong> {complaint.category}</p>

// //           <p><strong>Description:</strong> {complaint.description}</p>

// //           <p><strong>Status:</strong> {complaint.status}</p>

// //           {complaint.resolutionNote && (
// //             <p><strong>Resolution:</strong> {complaint.resolutionNote}</p>
// //           )}

// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MyComplaints;

// import React, { useState, useEffect } from "react";
// import { complaintsAPI } from "../services/api";

// const MyComplaints = () => {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const data = await complaintsAPI.getMyComplaints();
//         setComplaints(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchComplaints();
//   }, []);

//   return (
//     <div className="container">
//       <h2>My Complaints</h2>

//       {complaints.length === 0 ? (
//         <p>No complaints submitted yet.</p>
//       ) : (
//         complaints.map((complaint) => (
//           <div key={complaint._id} className="complaint-card">

//             <h3>Complaint ID: {complaint.complaintId}</h3>

//             <p><strong>Category:</strong> {complaint.category}</p>

//             <p><strong>Description:</strong> {complaint.description}</p>

//             <p><strong>Status:</strong> {complaint.status}</p>

//             {complaint.resolutionNote && (
//               <p><strong>Resolution:</strong> {complaint.resolutionNote}</p>
//             )}

//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { complaintsAPI } from "../services/api";

const MyComplaints = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);

 useEffect(() => {
  fetchComplaints();
 }, []);
  
 const fetchComplaints = async () => {
  try {
    const data = await
    complaintsAPI.getComplaints();
    setComplaints(data);
  } catch(error) {
    console.error("Error fetching complaints:", error);
  }
 }
  return (
    <div className="my-complaints-container">
      <div className="complaints-header">
        <h2>My Complaints</h2>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/submit-complaint")}
        >
          + New Complaint
        </button>
      </div>

      {complaints.length === 0 ? (
        <div className="empty-state">
          <p>No complaints yet</p>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/submit-complaint")}
          >
            Submit Your First Complaint
          </button>
        </div>
      ) : (
        <div className="complaints-list">
          {complaints.map((complaint, index) => (
            <div key={index} className="complaint-card">
              <h3>{complaint.name}</h3>
              <p><strong>Ward:</strong> {complaint.ward}</p>
              <p><strong>Location:</strong> {complaint.location}</p>
              <p><strong>Category:</strong> {complaint.category}</p>
              <p><strong>Description:</strong> {complaint.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 

export default MyComplaints;
