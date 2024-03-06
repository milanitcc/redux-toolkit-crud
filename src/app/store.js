import { configureStore } from '@reduxjs/toolkit'
import userDetail from '../features/userDetailSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import cartSlice from '../features/cartSlice'
import productSlice from '../features/productSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedUserReducer = persistReducer(persistConfig, userDetail);

export const store = configureStore({
    reducer: {
        app: persistedUserReducer,
        cart: cartSlice,
        products: productSlice,
    },
})

export const persistor = persistStore(store)