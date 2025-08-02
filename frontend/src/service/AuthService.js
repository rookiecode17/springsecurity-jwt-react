import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // 修改为你的后端地址
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || "";

    console.error("API Error:", status, message);
    if (
      status === 401 || status === 403
    ) {
      console.warn("JWT invalid or expired, removing token...");
      localStorage.removeItem("jwt");
      // 可选：重定向到登录页
      window.location.href = "/"; // 修改为你的登录页路径
    }
    return Promise.reject(error);
  }
);

export default api;

// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290NkB0ZXN0LmNvbSIsImlhdCI6MTc1NDAxNTc5OCwiZXhwIjoxNzU0MDE3MjM4fQ.JPfoJydYix8Q2KloEYapN7zsBMa5JSxJlsm3083nSmg