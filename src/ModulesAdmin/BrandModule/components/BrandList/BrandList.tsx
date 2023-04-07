import React from 'react';
import './BrandList.styles.scss'
import { CheckBox2 } from '../../constructor';
const mockData = [
    {id:1, image:'https://churishop.co.il/src/img/productsComp/10485050.jpg', title:'test', status:false},
    {id:2, image:'https://churishop.co.il/src/img/productsComp/10485050.jpg', title:'test', status:false},
    {id:3, image:'https://churishop.co.il/src/img/productsComp/10485050.jpg', title:'test', status:false},
    {id:4, image:'https://churishop.co.il/src/img/productsComp/10485050.jpg', title:'test', status:false},
]
const BrandList = () => {

    const change = (checked: boolean) => {
        console.log(checked)
    }
    return (
        <div className='BrandList'>

            {mockData?.map((item,index) => 
            <div className='flex-container card' key={index}>
                <div className='col-lg-2 center img_block'>
                    <img src={item.image} />
                </div>
                <div className='col-lg-2 center'>
                    <span>{item.title}</span>
                </div>
                <div className='col-lg-2 center'>
                </div>
                <div className='col-lg-2 center'>
                </div>
                <div className='col-lg-2 center'>
                    <CheckBox2 checked={item.status} onChange={change} />
                </div>
                <div className='col-lg-2 center'>

                </div>
            </div>   
            )}
        </div>
    );
};

export default BrandList;