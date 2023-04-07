import React from 'react';
import './BrandModule.styles.scss';
import BrandList from './components/BrandList/BrandList';
import Head from './components/Head/Head';
import { Container } from './constructor';
const BrandModule = () => {
    return (
        <div className='BrandModule'>
            <Container>
                <Head/>
                <BrandList/>
            </Container>
        </div>
    );
};

export default BrandModule;