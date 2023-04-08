import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CouponsList from './CouponsList';
import './CouponsList.styles.scss';

export default {
    title: 'Admin Panel/CouponsModule/CouponsList',
    component: CouponsList
} as ComponentMeta<typeof CouponsList>;

const Template: ComponentStory<typeof CouponsList> = (args) => <CouponsList/>;

export const CouponsList1 = Template.bind({});
CouponsList1.args = {};
