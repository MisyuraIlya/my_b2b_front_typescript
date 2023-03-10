/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useState, FC} from 'react';
import { useForm } from "react-hook-form";

import { productAPI } from '../../../../services/ProductService';
import ProductItem from '../productItem/ProductItem';

const ProductContainer: FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [limit, setLimit] = useState(100);
    const {data: products, error, isLoading, refetch} = productAPI.useFetchAllProductsQuery(limit)
    const [createPost, {}] = productAPI.useCreateProductMutation()

    const onSubmit: any = async (data: any) => {
        await createPost(data)
    }
    return (
        <div>
            <h2>as</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("id", { required: true })} placeholder="id"/>
                <input {...register("title", { required: true })} placeholder="title"/>
                <input {...register("price")} />
                <input {...register("description")} />
                <input {...register("category")} />
                <input {...register("image")} />
                {(errors.exampleRequired != null) && <span>This field is required</span>}
                <input type="submit" />
            </form>

            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {(error != null) && <h1>Произошла ошибка при загрузке</h1>}
                {products?.map(product =>
                    // eslint-disable-next-line react/jsx-key
                    <ProductItem
                    product={product}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductContainer;