/** @format */

import { HttpInstance } from "./httpInstance";

const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const HttpHandler = {
  TopRated: async () =>
    HttpInstance(`/movie/top_rated?api_key=${api_key}`, "GET"),
  Popular: async () => HttpInstance(`/movie/popular?api_key=${api_key}`, "GET"),
  Upcoming: async () =>
    HttpInstance(`/movie/upcoming?api_key=${api_key}`, "GET"),
  Search: async (value: string) =>
    HttpInstance(`/search/movie?query=${value}`, "GET"),
  ExternalId: async (id: Number) =>
    HttpInstance(`/movie/${id}/external_ids?api_key=${api_key}`, "GET"),
  GetById: async (external_id: String) =>
    HttpInstance(`/find/${external_id}?external_source=imdb_id`, "GET"),
};

export default HttpHandler;
