/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-tabs */
import { FC } from 'react'

import { useTypedSelector } from '../../hooks/useTypedSelector';

import useActions from '../../hooks/useActions';

import { IProduct } from '@/models/product.interface';

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const { addItem } = useActions()
	const { cart } = useTypedSelector(state => state)
	const isExistsInCart = cart.some(i => i.id === product.id)
	return (
		<div>
			{product.title}
			<button onClick={() => !isExistsInCart && addItem(product)}>
				{isExistsInCart ? 'Already in cart' : 'Add to cart'}
			</button>
		</div>
	)
}

export default ProductItem
