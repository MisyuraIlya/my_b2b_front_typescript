import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OptionsModal from './OptionsModal';
import './OptionsModal.styles.scss';

export default {
    title: 'Admin Panel/UsersEditModule/OptionsModal',
    component: OptionsModal
} as ComponentMeta<typeof OptionsModal>;
const closeModalOption = () => {
    console.log('close')
}
const Template: ComponentStory<typeof OptionsModal> = (args) => <OptionsModal closeModalOption={closeModalOption}/>;

export const OptionsModal1 = Template.bind({});
OptionsModal1.args = {};
