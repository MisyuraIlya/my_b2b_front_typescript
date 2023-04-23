import { instance } from "@/api/api.interceptor";
import {PRODUCTS, TypeProductData, TypeProductDataFilters} from './product.types'
import { IProduct } from "@/models/product.interface";
import { IProductResponse, IProductSearchResponse } from "@/models/product.interface";
const API = 'https://digitrade.store/my_test/src/index.php';
const Controller = 'ProductsController'

export const ProductService =  {
    async getProfile(queryData = {} as TypeProductDataFilters){
        return instance<IProduct[]>({
            url:PRODUCTS,
            method: 'GET',
            params: queryData
        })
    },
    
    async getSimilar(productId: string | number){
        const response = await instance<IProductSearchResponse>({
            url:`${API}`,
            method: 'POST',
            data: {
                classPoint: Controller,
                funcName: 'FetchProductsByFilter',
                val: {
                    filterValue: productId
                }
            }
        })

        return response.data.data
    },

    async getBySlug(slug: string){
        return instance<IProduct>({
            url:`${PRODUCTS}/by-slug/${slug}`,
            method: 'GET'        
        })
    },

    async getByCategory(categorySlug: string){
        return instance<IProduct>({
            url:`${PRODUCTS}/by-category/${categorySlug}`,
            method: 'GET'        
        })
    },

    async getById(id: string | number){
        return instance<IProduct>({
            url:`${PRODUCTS}/${id}`,
            method: 'GET'        
        })
    },


    async create(){
        return instance<IProduct>({
            url: PRODUCTS,
            method: 'POST'
        })
    },

    async update(id: string | number, name: TypeProductData){
        return instance<IProduct>({
            url: `${PRODUCTS}/${id}`,
            method: 'PUT', 
            data: {name}
        })
    },

    async delete(id: string | number){
        return instance<IProduct>({
            url: `${PRODUCTS}/${id}`,
            method: 'DELETE'
        })
    }

}