import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userDetail from '../features/userDetailSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import cartSlice from '../features/cartSlice'
import productSlice from '../features/productSlice'

const rootReducer = combineReducers({
    app: userDetail,
    cart: cartSlice,
    products: productSlice
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})
})

export const persistor = persistStore(store)