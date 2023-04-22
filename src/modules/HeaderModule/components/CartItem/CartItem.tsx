import React, {FC} from 'react';
import CartActions from '../CartActons/CartActions';
import { ICart } from '@/models/cart.interface';
const CartItem: FC<{item: ICart}> = ({item}) => {
    return (
        <>
            {/* <div className={styles.item}>
                <img src={item.image} />
                <div>
                    <div className={styles.name}>{item.product.name}</div>
                    <div className={styles.price}>{convertPrice(item.product.price)}</div>
                    <CartActions item={item}/>
                </div>    
            </div> */}
        </>

    );
};

export default CartItem;