import React, { useEffect, useState } from "react";
import { complaintsAPI } from "../services/api";
import "../styles/AllComplaints.css";
const AllComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const data = await complaintsAPI.getComplaints();
      setComplaints(data || []);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await complaintsAPI.updateStatus(id, status);

      // Refresh complaints list
      const updatedComplaints = await complaintsAPI.getComplaints();
      setComplaints(updatedComplaints);
    } catch (error) {
      console.error("Error updating complaint:", error);
    }
  };

  return (
    <div className="all-complaints-container">
      <h2>All Complaints</h2>

      {complaints.length === 0 ? (
        <p>No complaints found</p>
      ) : (
        <table className="complaints-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ward</th>
              <th>Location</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint._id}>
                <td>{complaint.name}</td>
                <td>{complaint.ward}</td>
                <td>{complaint.location}</td>
                <td>{complaint.category}</td>
                <td>{complaint.description}</td>

                <td>
                  <select
                    value={complaint.status}
                    onChange={(e) =>
                      handleStatusUpdate(complaint._id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllComplaints;
