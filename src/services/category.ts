import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const categorySlice = createApi({
  reducerPath: "categorySlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXTAPI_URL,
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategory: builder.mutation({
      query: () => ({
        url: "/categories",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjgsInVzZXJuYW1lIjoibmljaGFwYS5jIiwiaWF0IjoxNjkwNzczMzYxLCJleHAiOjE2OTA4NTk3NjF9.n44lrxSipsiApHfCelGS5csUMHZFlaE9eVghV1Ae6Ag",
        },
      }),
    }),
  }),
});
export const { useGetCategoryMutation } = categorySlice;
