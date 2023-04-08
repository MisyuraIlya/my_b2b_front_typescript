import React from 'react';
import { MdDragIndicator } from "react-icons/md";
import { CheckBox2 } from '../../constructor';
import UseAnimations from "react-useanimations";
import trash2 from 'react-useanimations/lib/trash2';

import './SliderList.styles.scss';
const mockData = [
    {id:1, image:'https://havaya-b2b.co.il/src/img/slider/desktop/11133106.jpg', text:'ok', status:true, delete:true},
    {id:2, image:'https://havaya-b2b.co.il/src/img/slider/desktop/11133106.jpg', text:'ok', status:true, delete:true},
    {id:3, image:'https://havaya-b2b.co.il/src/img/slider/desktop/11133106.jpg', text:'ok', status:true, delete:true},

]
const SliderList = () => {

    const change = (checked: boolean) => {
        console.log(checked)
    }
    return (
        <div className='SliderList'>
            {mockData?.map((item,index) =>
                <div className='flex-container card' key={index}>
                    <div className='col-lg-2 center'>
                        <MdDragIndicator className="drag"/>
                    </div>   
                    <div className='col-lg-2 center'>
                        <img src={item.image} />
                    </div>  
                    <div className='col-lg-2 center'>
                        <span>{item.text}</span>
                    </div>  
                    <div className='col-lg-2 center'>
                        <CheckBox2 checked={true} onChange={change}/>
                    </div>  
                    <div className='col-lg-2 center'>
                        <UseAnimations animation={trash2} size={36} className="trash"/>
                    </div>  
                    <div className='col-lg-2 center'>
                    </div>   
                </div>
            )}
        </div>
    );
};

export default SliderList;