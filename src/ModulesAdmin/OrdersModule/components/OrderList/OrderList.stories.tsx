import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OrderList from './OrderList';
import './OrderList.styles.scss';

export default {
    title: 'Admin Panel/OrdersModule/OrderList',
    component: OrderList
} as ComponentMeta<typeof OrderList>;

const Template: ComponentStory<typeof OrderList> = (args) => <OrderList/>;

export const OrderList1 = Template.bind({});
OrderList1.args = {};
