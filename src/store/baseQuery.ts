import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type RootState } from '.'

export const baseQuery = fetchBaseQuery({
    baseUrl: "http://ec2-3-144-100-109.us-east-2.compute.amazonaws.com:3000",
    prepareHeaders: async (headers, { getState }) => {
        const { token } = (
            getState() as RootState
        ).auth

        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
            headers.set('Access-Control-Allow-Origin', '*')
        }

        return headers
    }
})