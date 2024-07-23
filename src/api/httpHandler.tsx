/** @format */

import { HttpInstance } from "./httpInstance";

const HttpHandler = {
  TopRated: async () => HttpInstance("/movie/top_rated", "GET"),
  Popular: async () => HttpInstance("/movie/popular", "GET"),
  Upcoming: async () => HttpInstance("/movie/upcoming", "GET"),
  Search: async (value: string) =>
    HttpInstance(`/search/movie?query=${value}`, "GET"),
  PUT: "PUT",
  DELETE: "DELETE",
};

export default HttpHandler;
