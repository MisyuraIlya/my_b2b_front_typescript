/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-tabs */
import { FC } from 'react'

// import { useGetProductsQuery } from '@services/ProductsService/product.service';
import { useGetProductsQuery } from '../../services/ProductsService/product.service';

import ProductItem from './ProductItem'

import { IProduct } from '@/models/product.interface'

const Home: FC = () => {
	const { data, isLoading, error } = useGetProductsQuery(6)

	return (
		<div>
			{isLoading
            ? (
				'Loading...'
			)
            : error
            ? (
				<div className='text-red'>{'error'}</div>
			)
            : (
				<div className='flex flex-wrap justify-between'>
					{data?.map((product: IProduct) => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			)}
		</div>
	)
}

export default Home
