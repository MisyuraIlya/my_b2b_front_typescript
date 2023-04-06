import React, { useState } from 'react';
import './InfoModal.styles.scss';
import { MdInfoOutline } from "react-icons/md";
import UseAnimations from 'react-useanimations';
import settings from 'react-useanimations/lib/settings'
const mockData = [
    {id:1, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
    {id:2, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
    {id:3, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
    {id:4, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
]
const InfoModal = () => {
    return (
        <div className='InfoModal'>
            {mockData?.map((item,index) => 
                <div className='flex-container' key={index}>
                    <div className='col-lg-1 center'>
                        <div className=''>
                            <span>{item.userExId}</span>
                        </div>
                    </div>
                    <div className='col-lg-3 center'>
                        <div className=''>
                            <span>{item.name}</span>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='image center'>
                            <span>{item.type}</span>
                        </div>
                    </div>
                    <div className='col-lg-2 center'>
                        <div className=''>
                            {item.status 
                                ?
                                    <span>פעיל</span>
                            
                                :
                                    <span>חסום</span>
                            }
                        </div>    
                    </div>
                    <div className='col-lg-2 center'>
                        <div className='pointer'>
                            <MdInfoOutline size={24} className="pointer"/>
                        </div>  
                    </div>
                    <div className='col-lg-2 center'>
                        <div className='pointer'>
                            <UseAnimations 
                            animation={settings}
                            size={35}
                            />  
                        </div> 
                    </div>
                </div>
            )}

        </div>
    );
};

export default InfoModal;