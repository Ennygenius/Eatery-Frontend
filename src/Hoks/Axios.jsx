import axios from "axios";

// const URI = "http://127.0.0.1:3000/";
const URI = "https://eateryms.onrender.com/";
const Axios = axios.create({
  baseURL: URI,
});

export default Axios;
