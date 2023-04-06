import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CatalogEditModule from './CatalogEditModule';
import './CatalogEditModule.styles.scss';

export default {
    title: 'Admin Panel/CatalogEditModule',
    component: CatalogEditModule
} as ComponentMeta<typeof CatalogEditModule>;

const Template: ComponentStory<typeof CatalogEditModule> = (args) => <CatalogEditModule/>;

export const CatalogEditModule1 = Template.bind({});
CatalogEditModule1.args = {};
