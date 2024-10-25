import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type RootState } from '.'

export const baseQuery = fetchBaseQuery({
    baseUrl: "http://ec2-18-191-178-77.us-east-2.compute.amazonaws.com:3000",
    prepareHeaders: async (headers, { getState }) => {
        const { accessToken } = (
            getState() as RootState
        ).auth

        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`)
            headers.set('Access-Control-Allow-Origin', '*')
        }

        return headers
    }
})