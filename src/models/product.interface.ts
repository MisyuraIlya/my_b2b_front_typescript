import { ICategory } from "./category.interface";
import { IPriceListBase } from "./priceListBase.interface";

export interface IProduct {
    id: number;
    category: ICategory
    priceListBase: IPriceListBase
    sku: string
    name: string
    image: string
    description: string
    packQuant: number
    barcode: string
    unpublished: boolean
    createdAt: IDate
    updatedAt: IDate

}

interface IDate {
    date: string
    timezone: string,
    timezone_type: number
}

export const defaultProduct: IProduct = {
    id: 0,
    category: {
      id: 0,
      name: '',
      level: 0,
      image: '',
      parent: [],
      children: [],
      createdAt: {
        date: '',
        timezone: '',
        timezone_type: 0
      },
      updatedAt: {
        date: '',
        timezone: '',
        timezone_type: 0
      }
    },
    priceListBase: {
      id: 0,
      price: 0,
      discount: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    sku: '',
    name: '',
    image: '',
    description: '',
    packQuant: 0,
    barcode: '',
    unpublished: false,
    createdAt: {
      date: '',
      timezone: '',
      timezone_type: 0
    },
    updatedAt: {
      date: '',
      timezone: '',
      timezone_type: 0
    }
  };