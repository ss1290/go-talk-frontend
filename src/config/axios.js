import axios from "axios";

const instance = axios.create({
  baseURL: "https://go-talk-backend-production.up.railway.app/",
  
//   baseURL: "http://localhost:8000",
//   localdev
});

export default instance;
