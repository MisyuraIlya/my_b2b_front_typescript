import React, { useState } from 'react';
import './CatalogEditList.styles.scss';
import { MdDragIndicator,MdOutlineInput } from "react-icons/md";
import { CheckBox2 } from '../../constructor';
const mockData = [
    {id:1, name:'categoryA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
    {id:2, name:'categoryA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
    {id:3, name:'categoryA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
    {id:4, name:'categoryA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
]
const CatalogEditList = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='CatalogEditList'>
            {mockData?.map((item,index) => 
                <div className='flex-container' key={index}>
                    <div className='col-lg-1 center'>
                        <MdOutlineInput size={24} className="pointer"/>
                    </div>
                    <div className='col-lg-1 center'>
                        <MdDragIndicator size={24} className="pointer"/>
                    </div>
                    <div className='col-lg-2'>
                        <div className='image center'>
                            <img src={item.image} className="pointer"/>
                        </div>
                    </div>
                    <div className='col-lg-1 center'>
                        <div className=''>
                            <span>{item.id}</span>
                        </div>    
                    </div>
                    <div className='col-lg-1 center'>
                        <div className=''>
                            <span>{item.name}</span>
                        </div>  
                    </div>
                    <div className='col-lg-6 flex-container'>
                        <div className='option col-lg-3'>
                            <CheckBox2 checked={active} onChange={() => setActive(!active)}/>
                        </div>    
                        <div className='option col-lg-3'>
                            <CheckBox2 checked={active} onChange={() => setActive(!active)}/>
                        </div>    
                        <div className='option col-lg-3'>
                            <CheckBox2 checked={active} onChange={() => setActive(!active)}/>
                        </div>    
                        <div className='option col-lg-3'>
                            <CheckBox2 checked={active} onChange={() => setActive(!active)}/>
                        </div>    
                    </div>
                </div>
            )}

        </div>
    );
};

export default CatalogEditList;