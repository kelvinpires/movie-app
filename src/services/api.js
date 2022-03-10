import axios from "axios";

export const API_KEY = "518e7f0f7d540796b4aed902d41c42c9";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
