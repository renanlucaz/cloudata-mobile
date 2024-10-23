import { baseQuery } from '@/src/store/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react'

export const floodRiskApi = createApi({
    reducerPath: 'floodRisk',
    baseQuery,
    tagTypes: ['FloodRisks', 'Address'],
    endpoints: (builder) => ({
        getFloodRiskList: builder.query<any, any>({
            query: (addressId: string) => ({
                url: `/flood-risk/${addressId}`,
                method: 'GET',
            }),
            providesTags: ['FloodRisks'],
            transformResponse: (data: any) => data.map((item: any) => ({ ...item, level: parseInt(item.level, 10) }))[0]
        }),
        createfloodRisk: builder.mutation({
            query: ({ addressId }) => ({
                url: `/flood-risk`,
                method: 'POST',
                body: {
                    addressId
                }
            }),
            invalidatesTags: ['FloodRisks', 'Address'],
        }),
    })
})

export const { useGetFloodRiskListQuery, useCreatefloodRiskMutation } = floodRiskApi