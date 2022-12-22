import axios from "axios";

const instance = axios.create({
  baseURL: "https://null-prose-production.up.railway.app",
});

export default instance;
