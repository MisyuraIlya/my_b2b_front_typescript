/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, {useEffect, useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import { productAPI } from '../services/ProductService';

import { IProduct } from '@/models/product.interface';

import ProductItem from './ProductItem';

const ProductContainer = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [limit, setLimit] = useState(100);
    const {data: products, error, isLoading, refetch} = productAPI.useFetchAllProductsQuery(limit)
    const [createPost, {}] = productAPI.useCreateProductMutation()
    const [updatePost, {}] = productAPI.useUpdateProductMutation()
    const [deletePost, {}] = productAPI.useDeleteProductMutation()

    // const handleCreate = async () => {
    //     const title = prompt()
    //     await createPost({title, body: title} as IProduct)
    // }

    const handleRemove = (product: IProduct) => {
        void deletePost(product)
    }

    const handleUpdate = (product: IProduct) => {
        void updatePost(product)
    }

    const onSubmit: any = async (data: any) => {
        await createPost(data)
    }
    const addToCard = (product: IProduct) => {
        console.log('here')
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("id", { required: true })} placeholder="id"/>
                <input {...register("title", { required: true })} placeholder="title"/>
                <input {...register("price")} />
                <input {...register("description")} />
                <input {...register("category")} />
                <input {...register("image")} />

                {/* errors will return when field validation fails  */}
                {(errors.exampleRequired != null) && <span>This field is required</span>}

                <input type="submit" />
            </form>

            <div className="post__list">
                {/* <button onClick={handleCreate}>Add new product</button> */}
                {isLoading && <h1>Идет загрузка...</h1>}
                {(error != null) && <h1>Произошла ошибка при загрузке</h1>}
                {products?.map(product =>
                    <ProductItem
                    remove={handleRemove}
                    update={handleUpdate}
                    key={product.id}
                    product={product}
                    addToCard={addToCard}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductContainer;