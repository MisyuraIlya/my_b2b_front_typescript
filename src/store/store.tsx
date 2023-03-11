import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {postAPI} from '@/services/PostService'
import { productAPI } from "@/services/ProductService";
import { cartReducer } from "@/store/cart/cart.slice";

const rootReducer = combineReducers({
    [postAPI.reducerPath]: postAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    cart: cartReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
            postAPI.middleware,
            productAPI.middleware
          ])
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']