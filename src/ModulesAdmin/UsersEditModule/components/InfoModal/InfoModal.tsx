import React, { useState } from 'react';
import './InfoModal.styles.scss';
import { MdInfoOutline } from "react-icons/md";
import UseAnimations from 'react-useanimations';
import settings from 'react-useanimations/lib/settings'
import { Modal } from '../../constructor';
const mockData = {id:1, name:'ilya', userExId:'123', mail:'ilya@gmail.com', password:'12345' }


    

const InfoModal = () => {
    const [active, setActive] = useState(false)
    const closeModal = () => {
        setActive(false)
    }
    return (
        <div className='InfoModal'>
            <button onClick={() => setActive(true)}>open</button>
            <Modal isOpen={active} onClose={closeModal}>
                <div className='flex-container'>
                    <div className='col-lg-3 margin'>
                        <span>שם לוקח</span>
                    </div>
                    <div className='col-lg-9 margin'>
                        <span>{mockData.name}</span>
                    </div> 
                    <div className='col-lg-3 margin'>
                        <span>מס לקוח</span>
                    </div>
                    <div className='col-lg-9 margin'>
                        <span>{mockData.userExId}</span>
                    </div> 
                    <div className='col-lg-3 margin'>
                        <span>שם משתמש</span>
                    </div>
                    <div className='col-lg-9 margin'>
                        <span>{mockData.mail}</span>
                    </div> 
                    <div className='col-lg-3 margin'>
                        <span>סיסמא</span>
                    </div>
                    <div className='col-lg-9 margin'>
                        <span>{mockData.password}</span>
                    </div> 
                </div>
            </Modal>
        </div>
    );
};

export default InfoModal;