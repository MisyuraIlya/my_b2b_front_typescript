import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit"
import { IProduct } from "@/models/product.interface"
import { ICart } from "@/models/cart.interface";

interface CartState {
    items: ICart[];
  }

const initialState: CartState = {
    items: []
  };

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IProduct>) => {
            const existingItemIndex = state.items.findIndex(item => item.product.id === action.payload.id);
            if (existingItemIndex >= 0) {
              state.items[existingItemIndex].quantity++;
            } else {
              state.items.push({ id: nanoid(), product: action.payload, quantity: 1 });
            }
          },
          increaseQuantity: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(item => item.product.id === action.payload);
            if (itemIndex >= 0) {
              state.items = state.items.map((item, index) => {
                if (index === itemIndex) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              });
            }
          },
          decreaseQuantity: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(item => item.product.id === action.payload);
            if (itemIndex >= 0) {
              const item = state.items[itemIndex];
              if (item.quantity > 1) {
                state.items = state.items.map((item, index) => {
                  if (index === itemIndex) {
                    return { ...item, quantity: item.quantity - 1 };
                  }
                  return item;
                });
              } else {
                state.items = state.items.filter(item => item.product.id !== action.payload);
              }
            }
          },
          removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.product.id !== action.payload);
          }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions