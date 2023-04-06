import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OptionsModal from './OptionsModal';
import './OptionsModal.styles.scss';

export default {
    title: 'Admin Panel/UsersEditModule/OptionsModal',
    component: OptionsModal
} as ComponentMeta<typeof OptionsModal>;

const Template: ComponentStory<typeof OptionsModal> = (args) => <OptionsModal/>;

export const OptionsModal1 = Template.bind({});
OptionsModal1.args = {};
