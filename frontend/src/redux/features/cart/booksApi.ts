// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";

// const baseQuery =

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}`,
  prepareHeaders: (headers) => {
    //   const token = (getState() as RootState).auth.token
    const token = localStorage.getItem("token");

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// Define a service using a base URL and expected endpoints
// export const bookApi = createApi({
//   reducerPath: "bookApi",
//   //   baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/books` }),
//   baseQuery,
//   endpoints: (builder) => ({
//     getBooks: builder.query({
//       query: () => `/api/books`,
//     }),
//   }),
// });

export interface BooksResponse {
  _id: string;
  title: string;
  description: string;
  category: string;
  trending: boolean;
  coverImage: string;
  oldPrice: number;
  newPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const bookApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  tagTypes: ["Books"],
  endpoints: (build) => ({
    getBooks: build.query<BooksResponse[], void>({
      query: () => "books",
      // providesTags: (result) =>
      //   result ? result.map(({ id }) => ({ type: 'Posts', id })) : [],
    }),
    // addPost: build.mutation<Post, Partial<Post>>({
    //   query: (body) => ({
    //     url: `posts`,
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: ['Posts'],
    // }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery } = bookApi;
