import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Address {
    email: string
}

interface AuthState {
    addressList: Address[] | null
}

const initialState: AuthState = {
    addressList: null,
}

export const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    }
})

export const { } = authSlice.actions

export default authSlice.reducer