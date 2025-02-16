// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";
import { Book } from "../../../models/book.model";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (build) => ({
    getBooks: build.query<Book[], void>({
      query: () => "books",
      providesTags: ["Books"],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery } = bookApi;
