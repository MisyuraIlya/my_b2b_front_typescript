import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider from './Slider';
import './Slider.styles.scss';

export default {
    title: 'Components/HomeModule/Slider',
    component: Slider
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider/>;

export const Slider1 = Template.bind({});
Slider1.args = {
    children: '<h2>hello world</h2>'
};
