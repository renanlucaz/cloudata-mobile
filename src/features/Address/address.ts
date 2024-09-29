import { baseQuery } from '@/src/store/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react'

export const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery,
    endpoints: (builder) => ({
        getAddressList: builder.query<any, any>({
            query: () => ({
                url: '/address',
                method: 'GET',
            })
        })
    })
})

export const { useGetAddressListQuery } = addressApi