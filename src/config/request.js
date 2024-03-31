import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
  baseURL: "http://localhost:3000",
});

request.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${Cookies.get("user_token")}`
  return config
},
(error) => {
  return Promise.reject(error)
})


export { request };
