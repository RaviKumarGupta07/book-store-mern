import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // ⚠️ Ensure "/react" is imported
import getBaseUrl from "../../../utils/baseUrl";

const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/orders`,
        credentials: 'include'
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "/",
                method: "POST",
                body: newOrder,
                credentials: 'include',
            }),
        }),
    }),
});

export const { useCreateOrderMutation } = ordersApi; // ✅ Ensure this is exported
export default ordersApi;
