import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
  baseURL: "https://admin-backend-beige.vercel.app",
});

request.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${Cookies.get("user_token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.request.use(
  (config) => config,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export { request };
