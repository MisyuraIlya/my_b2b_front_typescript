import React, {FC} from 'react';
import './Input.styles.scss';
export interface InputProps {
    type: string;
    placeholder: string;
    hookForm: any
}

const Input: FC<InputProps> = ({ type, placeholder, hookForm, ...props}) => {
    return (
        <div className="Input">
            <input {...hookForm} type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;