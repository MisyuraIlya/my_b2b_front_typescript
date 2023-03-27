/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RegistrationForm from './RegistrationForm';
// import './index.styles.scss';

export default {
    title: 'Components/Registration/RegistrationForm',
    component: RegistrationForm
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = (args) => <RegistrationForm/>;

export const Registration = Template.bind({});
Registration.args = {};
