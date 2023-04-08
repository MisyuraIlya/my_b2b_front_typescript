import React from 'react';
import './CouponsList.styles.scss';
import { CheckBox2 } from '../../constructor';
const mockData = [
    {id:1, coupon:'1234', minimum:50, maximum:100, discount:10, status:true},
    {id:2, coupon:'1asd', minimum:50, maximum:100, discount:10, status:true},
    {id:3, coupon:'41asd', minimum:50, maximum:100, discount:10, status:true},
    {id:4, coupon:'4dfas', minimum:50, maximum:100, discount:10, status:true},
]
const CouponsList = () => {

    const change = (checked: boolean) => {
        console.log(checked)
    }
    return (
        <div className='CouponsList'>
            {mockData?.map((item,index) =>
                <div className='flex-container card' key={index}>
                    <div className='col-lg-2 center'>

                    </div>
                    <div className='col-lg-2 center'>
                        <span>{item.coupon}</span>
                    </div>
                    <div className='col-lg-2 center'>
                        <span>{item.minimum}</span>
                    </div>
                    <div className='col-lg-2 center'>
                        <span>{item.maximum}</span>
                    </div>
                    <div className='col-lg-2 center'>
                        <span>{item.discount}</span>
                    </div>
                    <div className='col-lg-2 center'>
                        <span>{item.status 
                        ?
                            <CheckBox2 checked={true} onChange={change}/>
                        :
                            <CheckBox2 checked={true} onChange={change}/>
                        }</span>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CouponsList;