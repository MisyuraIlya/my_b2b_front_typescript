import React from 'react';
import Head from './components/Head/Head';
import OrderList from './components/OrderList/OrderList';
import './OrdersModule.styles.scss'
const OrdersModule = () => {
    return (
        <div className='OrdersModule'>
            <h4>היסטוריית הזמנות</h4>
            <Head/>
            <OrderList/>
        </div>
    );
};

export default OrdersModule;