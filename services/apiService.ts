import axios from "axios";
import { ApiResponse } from "../interfaces/interface";

const nextMonth = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDate = new Date();
  let nextMonthIndex = (currentDate.getMonth() + 1) % 12;
  return months[nextMonthIndex];
};

const currentYear = () => {
  return new Date().getFullYear();
};

const API_URL = "https://kinopoiskapiunofficial.tech/api/v2.2";
const TOKEN = "04f52c02-3760-48b0-b072-1929e60debef";

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": TOKEN,
  },
});

export const apiMethods = {
  getFilms: () =>
    api.get<ApiResponse>(
      `/films?yearFrom=${currentYear()}&yearTo=${currentYear()}`
    ),
  getPremiers: () =>
    api.get<ApiResponse>(
      `/films/premieres?year=${currentYear()}&month=${nextMonth()}`
    ),
};

export default api;
