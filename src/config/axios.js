import axios from "axios";

const instance = axios.create({
  baseURL: "https://go-talk-backend-production.up.railway.app",
});

export default instance;
