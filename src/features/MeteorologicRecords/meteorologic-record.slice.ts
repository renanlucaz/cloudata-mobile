import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Address {
    email: string
}

interface AuthState {
    meteorologicRecordList: Address[] | null
}

const initialState: AuthState = {
    meteorologicRecordList: null,
}

export const meteorologicRecordSlice = createSlice({
    name: 'meteorologicRecord',
    initialState,
    reducers: {

    }
})

export const { } = meteorologicRecordSlice.actions

export default meteorologicRecordSlice.reducer