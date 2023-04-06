import React, { useState } from 'react';
import './UsersList.styles.scss';
import { MdInfoOutline, MdMoreHoriz } from "react-icons/md";
import OptionsModal from '../OptionsModal/OptionsModal';
import SubAccountsList from '../SubAccountsList/SubAccountsList';
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4'

const mockData = [
    {id:1, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg', subAccounts:[{id:1, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:2, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:3, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}]},
    {id:2, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg', subAccounts:[{id:1, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:2, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:3, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}]},
    {id:3, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg', subAccounts:[{id:1, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:2, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:3, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}]},
    {id:4, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg', subAccounts:[{id:1, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:2, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:3, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}]},
]
const UsersList = () => {
    const [active,setActive] = useState(0)
    const [activeSub, setActiveSub] = useState<boolean[]>([])
    const closeModalOption = () => {
        setActive(0)
    }

    const handleClick = (id:number) => {
        const updatedStates = [...activeSub];
        updatedStates[id] = !updatedStates[id];
        setActiveSub(updatedStates);
    } 
    return (
        <div className='UsersList'>
            {mockData?.map((item,index) => 
            <>
                <div className='flex-container list' key={index}>
                    <div className='col-lg-1 center'>
                        <UseAnimations 
                            animation={menu4}
                            size={35}
                            onClick={() => handleClick(item.id)}
                        /> 
                    </div>
                    <div className='col-lg-1 center'>
                        <div className=''>
                            <span>{item.userExId}</span>
                        </div>
                    </div>
                    <div className='col-lg-2 center'>
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
                {item.subAccounts.length && activeSub[item.id] && 
                <SubAccountsList SubAccounts={item.subAccounts}/>
                }

            </>

            )}
        </div>

    );
};

export default UsersList;