/** @format */

import { HttpInstance } from "./httpInstance";

const HttpHandler = {
  TopRated: async () => HttpInstance("/movie/top_rated", "GET"),
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export default HttpHandler;
