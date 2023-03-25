import React, {FC} from 'react';

export interface InputProps {
    type: string;
    placeholder: string;
}

const Input: FC<InputProps> = ({ type, placeholder, ...props}) => {
    return (
        <input {...props} type={type} placeholder={placeholder} className="Input"/>
    );
};

export default Input;