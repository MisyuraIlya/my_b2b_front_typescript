import React, {FC} from 'react';
import { IProduct } from '@/models/product.interface';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
interface PostItemProps {
    product: IProduct;
    remove: (product: IProduct) => void;
    update: (product: IProduct) => void;
    addToCard: (product: IProduct) => void;
}

const ProductItem: FC<PostItemProps> = ({product, remove, update, addToCard}) => {
    const {cart} = useTypedSelector(state => state)
    const {addItem} = useActions()
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(product)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() ?? "no"
        update({...product, title})
    }

    const handleAddToCart = (event: React.MouseEvent) => {
        event.stopPropagation()
        addToCard(product)
    }

    const isExistsInCart = cart.some(p => p.product.id === product.id)

    return (
        <div className="post"
        //  onClick={handleUpdate}
         >
            {product.id}. {product.title}
            {product.category}
            {product.description}
            {product.image}
            {product.price}
            <button onClick={handleRemove}>Delete</button>
            {!isExistsInCart &&
            <button onClick={() => addItem(product)} >
                add to cart
            </button>
            }

        </div>
    );
};

export default ProductItem;