import React, { FC, useState } from 'react';
import './OptionsModal.styles.scss';
import { MdClose } from "react-icons/md";
import UseAnimations from 'react-useanimations';
import settings from 'react-useanimations/lib/settings'

interface OptionsModalProps {
    closeModalOption: () => void;
  }
const OptionsModal: FC<OptionsModalProps> = ({closeModalOption}) => {
    return (
        <div className='OptionsModal'>
            <div className='head'>
                <MdClose size={24} className="pointer" onClick={() => closeModalOption()}/>
            </div>
            <div className='content'>
                <div className='option'>
                    <UseAnimations 
                    animation={settings}
                    size={25}
                    /> 
                    <span>שינוי סיסמה</span>
                </div>
                <div className='option'>
                    <UseAnimations 
                    animation={settings}
                    size={25}
                    /> 
                    <span>שינוי סיסמה</span>
                </div>
                <div className='option'>
                    <UseAnimations 
                    animation={settings}
                    size={25}
                    /> 
                    <span>שינוי סיסמה</span>
                </div>
            </div>
        </div>
    );
};

export default OptionsModal;