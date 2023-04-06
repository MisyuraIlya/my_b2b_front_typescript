import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UsersEditModule from './UsersEditModule';
import './UsersEditModule.styles.scss';

export default {
    title: 'Admin Panel/UsersEditModule',
    component: UsersEditModule
} as ComponentMeta<typeof UsersEditModule>;

const Template: ComponentStory<typeof UsersEditModule> = (args) => <UsersEditModule/>;

export const UsersEditModule1 = Template.bind({});
UsersEditModule1.args = {};
