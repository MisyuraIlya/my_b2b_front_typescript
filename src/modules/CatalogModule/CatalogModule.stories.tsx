import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CatalogModule from './CatalogModule';
import './CatalogModule.styles.scss';

export default {
    title: 'Components/CatalogModule',
    component: CatalogModule
} as ComponentMeta<typeof CatalogModule>;

const Template: ComponentStory<typeof CatalogModule> = (args) => <CatalogModule/>;

export const CatalogModule1 = Template.bind({});
CatalogModule1.args = {};
