import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-api-l31g.onrender.com/api",
});

export default API;