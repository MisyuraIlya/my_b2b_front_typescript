import React, {FC} from 'react';

export interface ContainerProps {
    children: any;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className='Container'>
            {children}
        </div>
    );
};

export default Container;