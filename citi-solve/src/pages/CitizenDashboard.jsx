import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CitizenDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <h2>Welcome back, {user?.name}</h2>

      <div className="stats">
        <div className="card">
          <h3>Total Reports</h3>
          <p>--</p>
        </div>
        <div className="card">
          <h3>Pending</h3>
          <p>--</p>
        </div>
        <div className="card">
          <h3>Resolved</h3>
          <p>--</p>
        </div>
      </div>

      <div className="actions">
        <Link to="/submit-complaint" className="btn-primary">
          Submit Complaint
        </Link>
        <Link to="/my-complaints" className="btn-outline">
          View My Complaints
        </Link>
      </div>
    </div>
  );
};

export default CitizenDashboard;