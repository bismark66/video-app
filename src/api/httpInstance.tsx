/** @format */

import { HttpResponse } from "./httpResponse";

const baseUrl = "https://api.themoviedb.org/3";

export async function HttpInstance(url: string, method: string) {
  const fetchData = await fetch(`${baseUrl}${url}&language=en-US`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  });
  console.log("---", fetchData);

  const res = HttpResponse(fetchData);

  return res;
}
