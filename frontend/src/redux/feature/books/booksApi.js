import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books`,
  credentials: 'include',
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      Headers.set('Authorization', `Bearer ${token}`);
    }
    return Headers;
  }
})

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery,
  tagTypes: ['Books'],
  endpoints: (builder) => ({

    fetchAllBooks: builder.query({
      query: () => "/",
      providesTags: ["Books"]
    }),

    fetchBookById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (results, error, id) => [{ types: "Books", id }],
    }),

    addBooks: builder.mutation({ // for "post" method we use builder.mutation
      query: (newBook) => ({
        url: `/create-book`,
        method: "POST", // Except get method , all others method need to specify this
        body: newBook
      }),
      invalidatesTags: ["Books"] // refreshes the data
    }),
    updateBook: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          'content-type': 'application/json'
        },
        invalidatesTags: ["Books"]
      }),
    }),
    deleteBook: builder.mutation({
      queryquery: (id) => ({
        url: `/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Books"]
    })

  })
});

export const { useFetchAllBooksQuery ,useFetchBookByIdQuery,useAddBooksMutation,useUpdateBookMutation,useDeleteBookMutation} = booksApi
export default booksApi
