import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CouponsModule from './CouponsModule';
import './CouponsModule.styles.scss';

export default {
    title: 'Admin Panel/CouponsModule/CouponsModule',
    component: CouponsModule
} as ComponentMeta<typeof CouponsModule>;

const Template: ComponentStory<typeof CouponsModule> = (args) => <CouponsModule/>;

export const CouponsModule1 = Template.bind({});
CouponsModule1.args = {};
