import React, { useState } from 'react';
import './UsersList.styles.scss';
import { MdInfoOutline, MdMoreHoriz } from "react-icons/md";
import OptionsModal from '../OptionsModal/OptionsModal';
const mockData = [
    {id:1, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
    {id:2, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
    {id:3, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
    {id:4, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg'},
]
const UsersList = () => {
    const [active,setActive] = useState(0)
    const closeModalOption = () => {
        setActive(0)
    }
    return (
        <div className='UsersList'>
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
                    <div className='col-lg-2 center option'>
                        <div className='pointer'>
                            <MdMoreHoriz size={24} className="pointer" onClick={() => setActive(item.id)}/>
                        </div> 
                        {active == item.id ? 
                        <div className='modalOption'>
                            <OptionsModal closeModalOption={closeModalOption}/>
                        </div>    
                            : null
                        }
                    </div>
                </div>
            )}

        </div>
    );
};

export default UsersList;