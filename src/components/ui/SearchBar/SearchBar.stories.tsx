import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from './SearchBar';
import './SearchBar.styles.scss';

export default {
    title: 'UI/SearchBar',
    component: SearchBar
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

const select = (id:string) => {
    console.log(id)
}


export const SearchBar1 = Template.bind({});
SearchBar1.args = {
    options:[{value:'1', label:'1'}, {value:'2', label:'2'}],
    onSelect:select
};
