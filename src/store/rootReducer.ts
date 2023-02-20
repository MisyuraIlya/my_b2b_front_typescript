/* eslint-disable no-tabs */
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { productApi } from '../services/ProductsService/product.service';

import { cartReducer } from './cart/cart.slice'

export const store = configureStore({
	reducer: { cart: cartReducer, [productApi.reducerPath]: productApi.reducer },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>
