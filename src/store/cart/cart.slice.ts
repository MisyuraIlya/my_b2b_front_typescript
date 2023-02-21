import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit"
import { IProduct } from "@/models/product.interface"
import { ICart } from "@/models/cart.interface";

const initialState: ICart[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IProduct>) => {
            const obj = {
                id: nanoid(),
                product: action.payload,
                quantity: 1
            }
            state.push(obj)
        },
        removeItem: (state, action: PayloadAction<{id: string}>) => {
            return state.filter(p => p.id !== action.payload.id)
        },
        increaseItem: (state, action: PayloadAction<{id: string}>) => {
            // return state.filter(p )
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions