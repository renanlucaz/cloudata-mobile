import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
    email: string
}

interface AuthState {
    accessToken: string | null
    isLogged: boolean
    user: User | null
}

const initialState: AuthState = {
    accessToken: null,
    isLogged: false,
    user: null
}

export const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ accessToken: string, user: User }>) => {
            const { accessToken, user } = action.payload

            state.accessToken = accessToken
            state.isLogged = true
            state.user = user
        },
        logout: () => {
            return initialState
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer