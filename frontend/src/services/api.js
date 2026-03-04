// const baseURL = "https://citi-solve-1.onrender.com/api";
const baseURL = "http://localhost:5000/api";

const callAPI = async (endpoint, options = {}) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${baseURL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Network error occurred");
  }
};

// 🔐 AUTH API
export const authAPI = {
  login: (data) =>
    callAPI("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  register: (data) =>
    callAPI("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

// 📢 COMPLAINT API
export const complaintAPI = {
  getAllComplaints: () => callAPI("/complaints"),

  createComplaint: (data) =>
    callAPI("/complaints", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};