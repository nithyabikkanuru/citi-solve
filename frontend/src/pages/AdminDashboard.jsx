import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <p>Manage and monitor all citizen complaints</p>

      <div className="stats">
        <div className="card">
          <h3>Total Complaints</h3>
          <p>--</p>
        </div>
        <div className="card">
          <h3>Open</h3>
          <p>--</p>
        </div>
        <div className="card">
          <h3>In Progress</h3>
          <p>--</p>
        </div>
        <div className="card">
          <h3>Resolved</h3>
          <p>--</p>
        </div>
      </div>

      <Link to="/all-complaints" className="btn-primary">
        View All Complaints
      </Link>
    </div>
  );
};

export default AdminDashboard;