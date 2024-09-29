import { baseQuery } from '@/src/store/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react'

export const meteorologicRecordApi = createApi({
    reducerPath: 'meteorologicRecord',
    baseQuery,
    endpoints: (builder) => ({
        getMeteorologicRecordList: builder.query<any, any>({
            query: (addressId: string) => ({
                url: `/meteorologic-records/${addressId}`,
                method: 'GET',
            }),
            transformResponse: (response) => response.meteorologicRecords
        })
    })
})

export const { useGetMeteorologicRecordListQuery } = meteorologicRecordApi