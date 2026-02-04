import axios from 'axios';
const apiBaseUrl = process.env.API_BASE_URL || 'https://srijan-2026-o5bu.onrender.com/';

const axiosInstance = axios.create({
  baseURL: `${apiBaseUrl}api/v1`,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axios.get(
          `${apiBaseUrl}api/v1/user/refresh-token`,
          { withCredentials: true }
        );

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;