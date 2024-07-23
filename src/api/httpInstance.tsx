/** @format */

import { HttpResponse } from "./httpResponse";

const baseUrl = "https://api.themoviedb.org/3";

export async function HttpInstance(url: string, method: string) {
  const response = await fetch(
    `${baseUrl}${url}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("---", response);

  const res = HttpResponse(response);

  return res;
}
