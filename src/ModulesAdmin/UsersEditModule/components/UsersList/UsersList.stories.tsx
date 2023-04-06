import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UsersList from './UsersList';
import './UsersList.styles.scss';

export default {
    title: 'Admin Panel/UsersEditModule/UsersList',
    component: UsersList
} as ComponentMeta<typeof UsersList>;

const Template: ComponentStory<typeof UsersList> = (args) => <UsersList/>;

export const UsersList1 = Template.bind({});
UsersList1.args = {};
