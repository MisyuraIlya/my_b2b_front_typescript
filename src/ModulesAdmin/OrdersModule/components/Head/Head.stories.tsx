import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Head from './Head';
import './Head.styles.scss';

export default {
    title: 'Admin Panel/OrdersModule/Head',
    component: Head
} as ComponentMeta<typeof Head>;

const Template: ComponentStory<typeof Head> = (args) => <Head/>;

export const Head1 = Template.bind({});
Head1.args = {};
