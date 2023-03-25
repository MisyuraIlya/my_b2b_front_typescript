import { IProduct } from "./product.interface"

export interface IPriceListBase {
    id: number
    product: IProduct
    price: number
    discount: number
    createdAt: Date
    updatedAt: Date
}
