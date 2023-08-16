// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  // Set the baseUrl for every endpoint below
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: `categories`,
      }),
    }),
    // updatePokemon: builder.mutation({
    //   query: ({ name, patch }) => ({
    //     url: `pokemon/${name}`,
    //     method: 'PATCH',
    //     body: patch,
    //   }),
    // }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
