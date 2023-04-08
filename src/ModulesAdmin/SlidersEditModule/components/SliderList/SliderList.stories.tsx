import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SliderList from './SliderList';
import './SliderList.styles.scss';

export default {
    title: 'Admin Panel/SlidersEditModule/SliderList',
    component: SliderList
} as ComponentMeta<typeof SliderList>;

const Template: ComponentStory<typeof SliderList> = (args) => <SliderList/>;

export const SliderList1 = Template.bind({});
SliderList1.args = {};
