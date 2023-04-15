import React, { useState } from 'react';
import './AddToCart2.styles.scss'
const AddToCart2 = () => {
    const [active, setActive] = useState(false)
    const [number, setNumber] = useState('0')
    return (
        <div className='AddToCart2'>
            { !active ?       
                <div className='notActive' onClick={() => setActive(true)}>
                    <span>הוספה לסל</span>
                </div>
            :
                <div className='active'>
                    <div className='flex-container'>
                        <div className='col-lg-4'>
                            <div className='increase'>
                                <span>+</span>
                            </div>    
                        </div>    
                        <div className='col-lg-4'>
                            <div className='value'>
                                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                            </div>    
                        </div>   
                        <div className='col-lg-4'>
                            <div className='decrease'>
                                <span>-</span>
                            </div>    
                        </div>   
                    </div>    
                </div>
            }
        </div>
    );
};

export default AddToCart2;