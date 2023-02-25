/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const RedBtn = Template.bind({});
RedBtn.args = {
    color: 'red',
    children: 'Какой то текст'
};

export const OrangeBtn = Template.bind({});
OrangeBtn.args = {
    color: 'orange',
    children: 'Какой то текст'
};

export const BigBtn = Template.bind({});
BigBtn.args = {
    color: 'orange',
    big: true,
    children: 'Какой то текст'
};