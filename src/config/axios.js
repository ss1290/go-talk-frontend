import axios from "axios";

const instance = axios.create({
  baseURL: "https://go-talk-backend-production-be84.up.railway.app",
});

export default instance;
