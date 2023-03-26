import React, {FC} from 'react';
import './Input.styles.scss';
export interface InputProps {
    type: string;
    placeholder: string;
    hookForm: any
}

const Input: FC<InputProps> = ({ type, placeholder, hookForm, ...props}) => {
    return (
        <input {...props} type={type} placeholder={placeholder} className="Input"/>
    );
};

export default Input;