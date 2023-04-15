import React, { FC } from 'react';
import './AddToCart1.styles.scss'
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IProduct } from '../../../models/product.interface';
interface AddToCart1Props { 
    item: IProduct;
    // isInCart: boolean;
    // quantity: number;
    // onAddToCart: (id: number) => void;
    // onIncrease: () => void;
    // onDecrease: () => void;
    // onEdit: (value: number) => void;
}
const AddToCart1: FC<AddToCart1Props> = ({item}) => {
    const {cart} = useTypedSelector(state => state)

    const {addItem, removeItem, increaseQuantity, decreaseQuantity} = useActions()

    const getCartItem = (productId: number) => {
        const data = cart.items.find((item) => item.product.id === productId)
        return data
      };
      
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
    return (
        <div className='AddToCart1'>
            { !(Boolean(getCartItem(item.id))) ?       
                <div className='notActive' onClick={() => handleAddItem(item)}>
                    <span>הוספה לסל</span>
                </div>
             : 
                <div className='active'>
                    <div className='flex-container'>
                        <div className='col-lg-4'>
                            <div className='increase' onClick={() => handleIncreaseQuantity(item.id)}>
                                <span>+</span>
                            </div>    
                        </div>    
                        <div className='col-lg-4'>
                            <div className='value'>
                                <span>{getCartItem(item.id)?.quantity}</span>
                                {/* <input type="number" value={{getCartItem(product.id)?.quantity}} onChange={(e) => onEdit(parseInt(e.target.value))}  /> */}
                            </div>    
                        </div>   
                        <div className='col-lg-4'>
                            <div className='decrease' onClick={() => handleDecreaseQuantity(item.id)}>
                                <span>-</span>
                            </div>    
                        </div>   
                    </div>    
                </div>  
            } 
        </div>
    );
};

export default AddToCart1;