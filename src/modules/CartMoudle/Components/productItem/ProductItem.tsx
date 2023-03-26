import React, {FC} from 'react';
import { IProduct } from '@/models/product.interface';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
interface PostItemProps {
    product: IProduct;
}

const ProductItem: FC<PostItemProps> = ({product}) => {
    const {cart} = useTypedSelector(state => state)
    const {addItem, removeItem, increaseQuantity, decreaseQuantity} = useActions()

    const handleAddItem = (product: IProduct) => {
        addItem(product);
      };

      const handleIncreaseQuantity = (id: number) => {
        increaseQuantity(id);
      };

      const handleDecreaseQuantity = (id: number) => {
        decreaseQuantity(id);
      };

      const handleRemoveItem = (id: number) => {
        removeItem(id);
      };

      const getCartItem = (productId: number) => {
        const data = cart.items.find((item) => item.product.id === productId)
        return data
      };

    return (
        <div key={product.id}>
          {/* <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => { handleAddItem(product); }}>Add to cart</button>
          {(Boolean(getCartItem(product.id))) && (
            <div>
              <button onClick={() => { handleIncreaseQuantity(product.id); }}>+</button>
              <span>{getCartItem(product.id)?.quantity}</span>
              <button onClick={() => { handleDecreaseQuantity(product.id); }}>-</button>
            </div>
          )}
          <button onClick={() => { handleRemoveItem(product.id); }}>delete from cart</button> */}
        </div>
    );
};

export default ProductItem;