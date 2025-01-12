import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api/todos", 
});

api.interceptors.request.use(
  (config) => {
    config.headers["my-token"] = "12345"; 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
