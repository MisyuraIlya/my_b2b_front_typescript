import { instance } from "@/api/api.interceptor";
import {PRODUCTS, TypeProductData, TypeProductDataFilters} from './product.types'
import { IProduct } from "@/models/product.interface";

export const UserService =  {
    async getProfile(queryData = {} as TypeProductDataFilters){
        return instance<IProduct[]>({
            url:PRODUCTS,
            method: 'GET',
            params: queryData
        })
    },
    
    async getSimilar(productId: string | number){
        return instance<IProduct[]>({
            url:`${PRODUCTS}/similar/${productId}`,
            method: 'GET'        })
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