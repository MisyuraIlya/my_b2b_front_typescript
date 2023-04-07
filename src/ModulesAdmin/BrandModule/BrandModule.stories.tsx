import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BrandModule from './BrandModule';
import './BrandModule.styles.scss';

export default {
    title: 'Admin Panel/BrandModule',
    component: BrandModule
} as ComponentMeta<typeof BrandModule>;

const Template: ComponentStory<typeof BrandModule> = (args) => <BrandModule/>;

export const BrandModule1 = Template.bind({});
BrandModule1.args = {};
