import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type RootState } from '.'

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.API_URL,
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