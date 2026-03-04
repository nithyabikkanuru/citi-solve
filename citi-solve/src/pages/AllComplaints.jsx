import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const AllComplaints = () => {
  const { user } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch All Complaints
  const fetchComplaints = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/complaints",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setComplaints(data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");
  
      let resolutionNote = "";
  
      if (status === "Resolved") {
        resolutionNote = prompt("Enter resolution note:");
  
        if (!resolutionNote) {
          alert("Resolution note is required!");
          return;
        }
      }
  
      await fetch(
        `http://localhost:5000/api/complaints/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status,
            resolutionNote,
          }),
        }
      );
  
      fetchComplaints();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">All Complaints</h2>
  
      {complaints.length === 0 ? (
        <p className="no-data">No complaints found.</p>
      ) : (
        complaints.map((complaint) => (
          <div key={complaint._id} className="complaint-card">
            <div className="card-header">
              <h3>{complaint.title || "Complaint"}</h3>
              <span className={`status ${complaint.status.replace(" ", "-")}`}>
                {complaint.status}
              </span>
            </div>
  
            <p>
              <strong>Description:</strong> {complaint.description}
            </p>
  
            {complaint.resolutionNote && (
              <p className="resolution">
                <strong>Resolution:</strong> {complaint.resolutionNote}
              </p>
            )}
  
            {user?.role === "admin" && (
              <div className="admin-controls">
                <select
                  onChange={(e) =>
                    updateStatus(complaint._id, e.target.value)
                  }
                  defaultValue=""
                  className="status-select"
                >
                  <option value="" disabled>
                    Update Status
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  ); 
  return (
    <div className="admin-container">
      <h2 className="admin-title">All Complaints</h2>
  
      {complaints.length === 0 ? (
        <p className="no-data">No complaints found.</p>
      ) : (
        complaints.map((complaint) => (
          <div key={complaint._id} className="complaint-card">
            <div className="card-header">
              <h3>{complaint.title || "Complaint"}</h3>
              <span className={`status ${complaint.status.replace(" ", "-")}`}>
                {complaint.status}
              </span>
            </div>
  
            <p>
              <strong>Description:</strong> {complaint.description}
            </p>
  
            {complaint.resolutionNote && (
              <p className="resolution">
                <strong>Resolution:</strong> {complaint.resolutionNote}
              </p>
            )}
  
            {user?.role === "admin" && (
              <div className="admin-controls">
                <select
                  onChange={(e) =>
                    updateStatus(complaint._id, e.target.value)
                  }
                  defaultValue=""
                  className="status-select"
                >
                  <option value="" disabled>
                    Update Status
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
  return (
    <div className="admin-container">
      <h2 className="admin-title">All Complaints</h2>
  
      {complaints.length === 0 ? (
        <p className="no-data">No complaints found.</p>
      ) : (
        complaints.map((complaint) => (
          <div key={complaint._id} className="complaint-card">
            <div className="card-header">
              <h3>{complaint.title || "Complaint"}</h3>
              <span className={`status ${complaint.status.replace(" ", "-")}`}>
                {complaint.status}
              </span>
            </div>
  
            <p>
              <strong>Description:</strong> {complaint.description}
            </p>
  
            {complaint.resolutionNote && (
              <p className="resolution">
                <strong>Resolution:</strong> {complaint.resolutionNote}
              </p>
            )}
  
            {user?.role === "admin" && (
              <div className="admin-controls">
                <select
                  onChange={(e) =>
                    updateStatus(complaint._id, e.target.value)
                  }
                  defaultValue=""
                  className="status-select"
                >
                  <option value="" disabled>
                    Update Status
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
  return (
    <div className="admin-container">
      <h2 className="admin-title">All Complaints</h2>
  
      {complaints.length === 0 ? (
        <p className="no-data">No complaints found.</p>
      ) : (
        complaints.map((complaint) => (
          <div key={complaint._id} className="complaint-card">
            <div className="card-header">
              <h3>{complaint.title || "Complaint"}</h3>
              <span className={`status ${complaint.status.replace(" ", "-")}`}>
                {complaint.status}
              </span>
            </div>
  
            <p>
              <strong>Description:</strong> {complaint.description}
            </p>
  
            {complaint.resolutionNote && (
              <p className="resolution">
                <strong>Resolution:</strong> {complaint.resolutionNote}
              </p>
            )}
  
            {user?.role === "admin" && (
              <div className="admin-controls">
                <select
                  onChange={(e) =>
                    updateStatus(complaint._id, e.target.value)
                  }
                  defaultValue=""
                  className="status-select"
                >
                  <option value="" disabled>
                    Update Status
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
export default AllComplaints;