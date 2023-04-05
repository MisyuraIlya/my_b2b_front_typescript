import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from './Pagination';
import './Pagination.styles.scss';

export default {
    title: 'Components/CatalogModule/Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination/>;

export const Pagination1 = Template.bind({});
Pagination1.args = {};
