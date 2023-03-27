/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValidationForm from './ValidationForm';

export default {
    title: 'Components/Registration/ValidationForm',
    component: ValidationForm
} as ComponentMeta<typeof ValidationForm>;

const Template: ComponentStory<typeof ValidationForm> = (args) => <ValidationForm/>;

export const Registration = Template.bind({});
Registration.args = {};
