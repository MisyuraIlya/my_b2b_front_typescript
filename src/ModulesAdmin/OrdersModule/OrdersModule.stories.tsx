import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OrdersModule from './OrdersModule';
import './OrdersModule.styles.scss';

export default {
    title: 'Admin Panel/OrdersModule',
    component: OrdersModule
} as ComponentMeta<typeof OrdersModule>;

const Template: ComponentStory<typeof OrdersModule> = (args) => <OrdersModule/>;

export const OrdersModule1 = Template.bind({});
OrdersModule1.args = {};
