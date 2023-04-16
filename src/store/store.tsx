import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { postAPI } from '@/services/PostService'
import { productAPI } from "@/services/ProductService";
import { cartReducer } from "@/store/cart/cart.slice";

const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
  [productAPI.reducerPath]: productAPI.reducer,
  cart: cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
      postAPI.middleware,
      productAPI.middleware
    ])
  })

  const persistor = persistStore(store)

  return { store, persistor }
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = ReturnType<typeof setupStore>['store']['dispatch']

