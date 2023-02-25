import React, {FC} from 'react';

export interface ButtonProps {
    color: string;
    children: any;
    big?: boolean;
}

const Button: FC<ButtonProps> = ({children, color, big, ...props}) => {
    const rootClasses = ['my-button']
    if (big) {
        rootClasses.push('big-btn')
    }
    return (
        <button {...props} style={{color}} className={rootClasses.join(' ')}>
            {children}
        </button>
    );
};

export default Button;