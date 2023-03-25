import { ICategory } from "./category.interface";
import { IPriceListBase } from "./priceListBase.interface";

export interface IProduct {
    id: number;
    category: ICategory
    priceListBase: IPriceListBase
    sku: string
    name: string
    description: string
    packQuant: number
    barcode: string
    unpublished: boolean
    createdAt: Date
    updatedAt: Date

}
