import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeadOptions from './HeadOptions';
import './HeadOptions.styles.scss';

export default {
    title: 'Components/CatalogModule/HeadOptions',
    component: HeadOptions
} as ComponentMeta<typeof HeadOptions>;

const Template: ComponentStory<typeof HeadOptions> = (args) => <HeadOptions/>;

export const HeadOptions1 = Template.bind({});
HeadOptions1.args = {};
