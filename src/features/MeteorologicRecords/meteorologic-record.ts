import { baseQuery } from '@/src/store/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react'

export const meteorologicRecordApi = createApi({
    reducerPath: 'meteorologicRecord',
    baseQuery,
    tagTypes: ['MeteorologicRecords', 'Address'],
    endpoints: (builder) => ({
        getMeteorologicRecordList: builder.query<any, any>({
            query: (addressId: string) => ({
                url: `/meteorologic-records/${addressId}`,
                method: 'GET',
            }),
            providesTags: ['MeteorologicRecords'],
            transformResponse: (response) => response.meteorologicRecords
        }),
        createMeteorologicRecord: builder.mutation({
            query: ({ localeId }) => ({
                url: `/meteorologic-records/prevision`,
                method: 'POST',
                body: {
                    localeId
                }
            }),
            invalidatesTags: ['MeteorologicRecords', 'Address'],
        })
    })
})

export const { useGetMeteorologicRecordListQuery, useCreateMeteorologicRecordMutation } = meteorologicRecordApi