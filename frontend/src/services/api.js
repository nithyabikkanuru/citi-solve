import axios from "axios";

// Base API instance
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add token automatically to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// ---------------- AUTH APIs ----------------
export const authAPI = {
  login: async (data) => {
    const res = await API.post("/auth/login", data);
    return res.data;
  },

  register: async (data) => {
    const res = await API.post("/auth/register", data);
    return res.data;
  },
};

// ---------------- COMPLAINT APIs ----------------
export const complaintsAPI = {
  // Get all complaints
  getComplaints: async () => {
    const res = await API.get("/complaints");
    return res.data;
  },

  // Create complaint
  createComplaint: async (data) => {
    const res = await API.post("/complaints", data);
    return res.data;
  },

  // Update complaint status
  updateStatus: async (id, status) => {
    const res = await API.patch(`/complaints/${id}/status`, { status });
    return res.data;
  },
};

export default API;