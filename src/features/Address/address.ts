import { baseQuery } from '@/src/store/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react'

export const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery,
    tagTypes: ['Address', 'MeteorologicRecords'],
    endpoints: (builder) => ({
        getAddressList: builder.query<any, any>({
            query: () => ({
                url: '/address',
                method: 'GET',
            }),
            providesTags: ['Address']
        }),
        newAddress: builder.mutation({
            query: ({ address }) => ({
                url: '/address',
                method: "POST",
                body: {
                    ...address
                },
            }),
            invalidatesTags: ['Address', 'MeteorologicRecords']
        }),
        getAddressByCEP: builder.query({
            query: (cep: string) => ({
                url: `/address/${cep}`,
                method: 'GET',
            }),
        })
    })
})


export const { useGetAddressListQuery, useNewAddressMutation, useGetAddressByCEPQuery } = addressApi