import { baseQuery } from '@/src/store/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react'

interface AuthRequest {
    email: string;
    password: string;
}

interface AuthResponse {
    user: {
        name: string;
        email: string;
    }
    accessToken: string
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, AuthRequest>({
            query: ({ email, password }: AuthRequest) => ({
                url: '/auth',
                method: 'POST',
                body: {
                    email,
                    password
                }
            })
        })
    })
})

export const { useLoginMutation } = authApi