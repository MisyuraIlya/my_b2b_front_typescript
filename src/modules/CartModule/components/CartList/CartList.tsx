import React from 'react';
import './CartList.styles.scss';
import { Button2 } from '../../constructor';
import UseAnimations from 'react-useanimations';
import trash2 from 'react-useanimations/lib/trash2'
const mockData = [
    {id:1, title:'productA', image:'https://havaya-b2b.co.il/src/img/products/9273.jpg', package:1,quantity:4, sku:'123', price:10, total:100},
    {id:2, title:'productB', image:'https://havaya-b2b.co.il/src/img/products/9273.jpg', package:1,quantity:4, sku:'123', price:10, total:100},
    {id:3, title:'productC', image:'https://havaya-b2b.co.il/src/img/products/9273.jpg', package:1,quantity:4, sku:'123', price:10, total:100},
    {id:4, title:'productD', image:'https://havaya-b2b.co.il/src/img/products/9273.jpg', package:1,quantity:4, sku:'123', price:10, total:100},
]
const CartList = () => {
    return (
        <div className='CartList'>
            <div className='cart_head'>
                <div className='title'>
                    <h4>סיכום הזמנה</h4>
                </div>
                <div className='options'>
                    <div className='btn'>
                        <Button2 Primary={false}>שמור טיוטה</Button2>
                    </div>
                    <div className='btn'>
                        <Button2 Primary={false}>טען טיוטה</Button2>
                    </div>
                </div>
            </div>
            <div className='listHead'>
                <div className='flex-container'>
                    <div className='col-lg-1'>
                        
                    </div>
                    <div className='col-lg-2 textAlign'>
                        <p>כמות</p>
                    </div>
                    <div className='col-lg-2'>
                        
                    </div>
                    <div className='col-lg-2'>
                        <p>שם פריט</p>
                    </div>
                    <div className='col-lg-1 textAlign'>
                        <p>יח בקרטון</p>
                    </div>
                    <div className='col-lg-2 textAlign'>
                        <p>מחיר ליחידה</p>
                    </div>
                    <div className='col-lg-2 textAlign'>
                        <p>סה״כ</p>
                    </div>
                </div>
            </div>
            <div className='list'>
                {mockData?.map((item,index) => {
                    return(
                        <div className='item_card' key={index}>
                            <div className='flex-container content'>
                                <div className='col-lg-1 trash'>
                                <UseAnimations 
                                    animation={trash2}
                                    size={35}
                                    />   
                                </div>    
                                <div className='col-lg-2'>
                                    <div className='btn'>
                                        <div className='cart_btn'>
                                            <div className='increase'>
                                                <span>+</span>
                                            </div>    
                                            <div className='quantity'>
                                                <span>1</span>
                                            </div>    
                                            <div className='decrease'>
                                                <span>-</span>
                                            </div>    
                                        </div>   
                                    </div>     
                                </div> 
                                <div className='col-lg-2'>
                                    <div className='img_block'>
                                        <img src='https://havaya-b2b.co.il/src/img/products/9273.jpg' />
                                    </div>    
                                </div> 
                                <div className='col-lg-2'>
                                    <div className='title'>
                                        <p>{item.sku}#</p>
                                        <h4>{item.title}</h4>
                                    </div>    
                                </div> 
                                <div className='col-lg-1 center'>
                                    <div>
                                        <p>{item.package}</p>
                                    </div>    
                                </div>
                                <div className='col-lg-2 center'>
                                    <div>
                                        <p>{item.quantity}</p>
                                    </div>    
                                </div> 
                                <div className='col-lg-2 center'>
                                    <div>
                                        <p>{item.total}</p>
                                    </div> 
                                </div> 
                            </div>    
                        </div>    
                    )
                })}
            </div>
        </div>
    );
};

export default CartList;