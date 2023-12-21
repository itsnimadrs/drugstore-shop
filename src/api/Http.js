import axios from "axios";
import { BASE_URL } from "./api";

export default  axios.create({baseURL: BASE_URL})
axios.defaults.baseURL = BASE_URL;