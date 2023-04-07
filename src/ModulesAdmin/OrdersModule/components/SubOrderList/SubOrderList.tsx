import React, {FC} from 'react';

interface ProductsProps {
    id:number,
    title:string,
    quantity: number,
    price:number

}
interface SubOrderListProps {
    Products:  ProductsProps[],

}
const SubOrderList: FC<SubOrderListProps> = ({Products}) => {
    return (
        <div className='SubOrderList'>
            <div className='flex-container head'>
                <div className='col-lg-2'>
                    <span>שם</span>
                </div>
                <div className='col-lg-2'>
                    <span>כמות</span>
                </div>
                <div className='col-lg-2'>
                    <span>מחיר</span>
                </div>
            </div>
            {Products.length > 0 ? Products?.map((item,index) =>
                <div className='flex-container card' key={index}>
                    <div className='col-lg-2'>
                        <span>{item.title}</span>
                    </div>
                    <div className='col-lg-2'>
                        <span>{item.quantity}</span>
                    </div> 
                    <div className='col-lg-2'>
                        <span>{item.price}</span>
                    </div>     
                </div>   
            ) :
            
                <div className='non'>
                    <span>לא נמצאו פריטים הזמנה</span>
                </div>    
            }
        </div>
    );
};

export default SubOrderList;