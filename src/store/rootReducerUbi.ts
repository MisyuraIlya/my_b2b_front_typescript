import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import { postAPI } from "../services/PostService";
import userReducer from './users/users.slice';

import { cartReducer } from './cart/cart.slice';

import { userAPI } from '@/services/Users/user.service';

const rootReducer = combineReducers({
    userReducer,
    [userAPI.reducerPath]: userAPI.reducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']