import { IProduct } from "@models/product.interface"

export interface ICart {
    id: string | undefined
    product: IProduct
    quantity: number

}