import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InfoModal from './InfoModal';
import './InfoModal.styles.scss';

export default {
    title: 'Admin Panel/UsersEditModule/InfoModal',
    component: InfoModal
} as ComponentMeta<typeof InfoModal>;

const Template: ComponentStory<typeof InfoModal> = (args) => <InfoModal/>;

export const InfoModal1 = Template.bind({});
InfoModal1.args = {};
