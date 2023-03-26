import React, {FC} from 'react';
import './Button.styles.scss';
export interface ButtonProps {
    children: any;
}

const Button: FC<ButtonProps> = ({children, ...props}) => {

    return (
        <button {...props} className={'Button'}>
            {children}
        </button>
    );
};

export default Button;