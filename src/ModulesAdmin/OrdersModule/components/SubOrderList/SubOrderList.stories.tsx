import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubOrderList from './SubOrderList';
import './SubOrderList.styles.scss';

export default {
    title: 'Admin Panel/OrdersModule/SubSubOrderList',
    component: SubOrderList
} as ComponentMeta<typeof SubOrderList>;

const Template: ComponentStory<typeof SubOrderList> = (args) => <SubOrderList/>;

export const SubOrderList1 = Template.bind({});
SubOrderList1.args = {};
