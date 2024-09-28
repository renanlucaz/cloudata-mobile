import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
    endpoints: (builder) => ({
        getAddressByCEP: builder.query<any, string>({
            query: (cep) => `${cep}`,
        }),
    }),
})

export const { useGetAddressByCEPQuery } = addressApi