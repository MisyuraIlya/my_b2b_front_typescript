import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SlidersEditModule from './SlidersEditModule';
import './SlidersEditModule.styles.scss';

export default {
    title: 'Admin Panel/SlidersEditModule',
    component: SlidersEditModule
} as ComponentMeta<typeof SlidersEditModule>;

const Template: ComponentStory<typeof SlidersEditModule> = (args) => <SlidersEditModule/>;

export const SlidersEditModule1 = Template.bind({});
SlidersEditModule1.args = {};
