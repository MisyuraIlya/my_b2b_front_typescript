import { IProduct } from "@models/product.interface"

export interface ICart {
    id: string
    product: IProduct
    quantity: number

}