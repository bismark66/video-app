/** @format */

export const HttpResponse = async (response: any) => {
  // console.log("to this point", response);
  if (!response.ok) {
    throw new Error(response.message || "Something went wrong");
  }
  const data = await response.json();
  // console.log("res", data);
  //   return Response.json(data);
  return data;
};
