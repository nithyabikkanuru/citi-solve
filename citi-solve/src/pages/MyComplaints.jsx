import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyComplaints = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const storedComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  }, []);

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
