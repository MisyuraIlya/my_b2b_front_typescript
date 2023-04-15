import React, { FC } from 'react';
import './AddToCart1.styles.scss'

interface AddToCart1Props { 
    itemId: number;
    isInCart: boolean;
    quantity: number;
    onAddToCart: (id: number) => void;
    onIncrease: () => void;
    onDecrease: () => void;
    onEdit: (value: number) => void;
}
const AddToCart1: FC<AddToCart1Props> = ({ itemId, isInCart, quantity, onAddToCart, onIncrease, onDecrease, onEdit }) => {
    
    return (
        <div className='AddToCart1'>
            { !isInCart ?       
                <div className='notActive' onClick={() => onAddToCart(itemId)}>
                    <span>הוספה לסל</span>
                </div>
            :
                <div className='active'>
                    <div className='flex-container'>
                        <div className='col-lg-4'>
                            <div className='increase' onClick={() => onIncrease()}>
                                <span>+</span>
                            </div>    
                        </div>    
                        <div className='col-lg-4'>
                            <div className='value'>
                                <input type="number" value={quantity} onChange={(e) => onEdit(parseInt(e.target.value))}  />
                            </div>    
                        </div>   
                        <div className='col-lg-4'>
                            <div className='decrease' onClick={() => onDecrease()}>
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