import { IProduct } from "@models/product.interface"

export interface ICartItem {
    id: number
    product: IProduct
    quantity: number

}