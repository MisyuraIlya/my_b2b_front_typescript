import React, { FC } from 'react';
import './Heading.styles.scss';
const Heading: FC<{
    title: string
    className?: string
}> = ({ title, className = '' }) => {
    return (
        <h1 className={`Heading ${className}`}>
            {title}
        </h1>
    );
};

export default Heading;
