import React, { useState } from 'react';
import './ProductList.styles.scss'

// export interface ProductListProps {
//     ProductList: 
// }
const mockData = [
    {id:1, sky:'123Asd', name:'productA', price:10, discountPrice:5 ,image:'https://churishop.co.il/src/img/productsComp/10351010.jpg' },
    {id:2, sky:'123Asd', name:'productB', price:10, discountPrice:5 ,image:'https://churishop.co.il/src/img/productsComp/10351010.jpg' },
    {id:3, sky:'123Ass', name:'productC', price:10, discountPrice:5 ,image:'https://churishop.co.il/src/img/productsComp/10351010.jpg'},
    {id:4, sky:'123Asd', name:'productD', price:10, discountPrice:5 ,image:'https://churishop.co.il/src/img/productsComp/10351010.jpg' },
    {id:5, sky:'123Asd', name:'productA', price:10, discountPrice:5 ,image:'https://churishop.co.il/src/img/productsComp/10351010.jpg' },
    {id:6, sky:'123Asd', name:'productB', price:10, discountPrice:5 ,image:'https://churishop.co.il/src/img/productsComp/10351010.jpg' },
    {id:7, sky:'123Ass', name:'productC', price:10, discountPrice:5 ,image:'https://churishop.co.il/src/img/productsComp/10351010.jpg'},
    {id:8, sky:'123Asd', name:'productD', price:10, discountPrice:5 ,image:'https://churishop.co.il/src/img/productsComp/10351010.jpg' },
]
const ProductList = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='ProductList'>
            <div className='flex-container'>
                {mockData?.map((item,index) => 
                    <div className='col-lg-3'  key={index}>
                        <div className='card'>
                            <div className='image_block'>
                                <img src={item.image} />
                            </div>    
                            <div className='content_block'>
                                <div className='title'>
                                    <span>{item.name}</span>
                                </div>    
                                <div className='info'>
                                    <span>{item.sky}</span>
                                </div>    
                                <div className='price'>
                                    <div className='last_price'>
                                        <span>{item.price}₪</span>
                                    </div>    
                                    <div className='original_price'>
                                    <span>{item.discountPrice}₪</span>
                                    </div>    
                                </div>    
                            </div>    
                            <div className='addToCart_block'>
                                {!active ?
                                    <div className='add' onClick={() => setActive(!active)}>
                                        <span>הוספה לסל</span>
                                    </div>  
                                :
                                <div className='flex-container incart'>
                                    <div className='col-lg-4'>
                                        <div className='increase'>
                                            <span>+</span>
                                        </div>    
                                    </div>   
                                    <div className='col-lg-4'>
                                        <div className='quantity'>
                                            <span>10</span>
                                        </div>    
                                    </div>    
                                    <div className='col-lg-4'>
                                        <div className='decrease'> 
                                            <span>-</span>
                                        </div>    
                                    </div>    
                                 </div>
                                }
  
    
                            </div>    
                        </div>
                    </div>    
    
                )}
            </div>
        </div>
    );
};

export default ProductList;