import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    floodRiskList: any
}

const initialState: AuthState = {
    floodRiskList: null,
}

export const floodRiskSlice = createSlice({
    name: 'floodRisk',
    initialState,
    reducers: {

    }
})

export const { } = floodRiskSlice.actions

export default floodRiskSlice.reducer