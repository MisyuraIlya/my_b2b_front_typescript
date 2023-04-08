import React from 'react';
import './CouponsModule.styles.scss';
import { Container } from './constructor';
import Head from './components/Head/Head';
import CouponsList from './components/CouponsList/CouponsList';
const CouponsModule = () => {
    return (
        <div className='CouponsModule'>
            <Container>
                <Head/>
                <CouponsList/>
            </Container>
        </div>
    );
};

export default CouponsModule;