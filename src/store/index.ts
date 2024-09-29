import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist'

import { authApi } from '../features/Auth'
import { addressApi } from '../features/Address'
import authReducer from '../features/Auth/auth.slice'
import addressReducer from '../features/Address/address.slice'
import { meteorologicRecordApi } from '../features/MeteorologicRecords';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'address']
}

const reducers = combineReducers({
    auth: authReducer,
    address: addressReducer,

    [authApi.reducerPath]: authApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [meteorologicRecordApi.reducerPath]: meteorologicRecordApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(authApi.middleware)
            .concat(addressApi.middleware)
            .concat(meteorologicRecordApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch