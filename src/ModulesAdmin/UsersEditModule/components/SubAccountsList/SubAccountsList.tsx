import React, { FC, useState } from 'react';
import './SubAccountsList.styles.scss';
import { MdInfoOutline, MdMoreHoriz } from "react-icons/md";
import OptionsModal from '../OptionsModal/OptionsModal';

interface subAccount {
    id:number,
    userExId:string,
    mail: string,
    password: string,
    phone: string,
    
}
interface SubAccountsListProps {
    SubAccounts: subAccount[]
}

const SubAccountsList: FC<SubAccountsListProps> = ({SubAccounts}) => {
    const [active,setActive] = useState(0)
    const closeModalOption = () => {
        setActive(0)
    }
    return (
        <div className='SubAccountsList'>
            <div className='flex-container head_sub'>
                <div className='col-lg-1 center'>
                    <span>לקוח</span>
                </div>
                <div className='col-lg-3 center'>
                    <span>מייל</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>סיסמה</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>טלפון</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>סטאטוס</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>פעולות</span>
                </div>
            </div>
            {SubAccounts?.map((item,index) =>
                <div className='flex-container' key={index}>
                    <div className='col-lg-1 center'>
                        <div className=''>
                            <span>{item.userExId}</span>
                        </div>
                    </div>
                    <div className='col-lg-3 center'>
                        <div className=''>
                            <span>{item.mail}</span>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='image center'>
                            <span>{item.password}</span>
                        </div>
                    </div>
                    <div className='col-lg-2 center'>
                        <div className='center'>
                            <span>{item.phone}</span>
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

export default SubAccountsList;