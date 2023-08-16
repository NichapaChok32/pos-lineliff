// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuListsApi = createApi({
  reducerPath: "menuListsApi",
  // Set the baseUrl for every endpoint below
  baseQuery: fetchBaseQuery({ baseUrl: "http://35.197.145.54:3000" }),
  endpoints: (builder) => ({
    getMenulists: builder.query({
      query: () => ({
        url: `item-masters`,
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

export const { useGetMenulistsQuery } = menuListsApi;
