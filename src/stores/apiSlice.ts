import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://35.197.145.54:3000/api/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetCategoriesQuery } = apiSlice;
