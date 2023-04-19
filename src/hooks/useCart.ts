import { TypedUseSelectorHook, useSelector } from "react-redux";
import {ICart} from '../models/cart.interface';
import { RootState } from "@/store/store";

export const useCart = () => {

    const deliveryPrice = 1000
    const items = useSelector<RootState, ICart[]>(state => state.cart.items);
    const subtotal = items.reduce((total, item) => total + (item.product.price.price * item.quantity), 0);

    const totalBeforeDiscount = subtotal;
    const discount = items.reduce((total, item) => total + (item.product.price.discount * item.quantity), 0);
    const totalAfterDiscount = totalBeforeDiscount - discount;


    const tax = subtotal * 0.17;
    const total = subtotal + deliveryPrice;
    const totalBeforeTax = total - tax
  
    return { total, tax, totalBeforeTax, totalBeforeDiscount, discount, totalAfterDiscount };
};