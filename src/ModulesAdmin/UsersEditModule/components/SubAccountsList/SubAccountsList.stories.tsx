import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubAccountsList from './SubAccountsList';
import './SubAccountsList.styles.scss';

export default {
    title: 'Admin Panel/UsersEditModule/SubAccountsList',
    component: SubAccountsList
} as ComponentMeta<typeof SubAccountsList>;

const mockData = [
    {id:1, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg', subAccounts:[{id:1, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:2, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:3, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}]},
    {id:2, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg', subAccounts:[{id:1, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:2, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:3, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}]},
    {id:3, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg', subAccounts:[{id:1, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:2, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:3, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}]},
    {id:4, userExId:'123', status:true , type:'עסקי', name:'userA', image:'https://smartsale.co.il/huri/pics/items/10406103.jpg', subAccounts:[{id:1, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:2, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}, {id:3, userExId:'123', mail:'test@gmail.com',password:'123456',phone:'0503036307',status:true}]},
]

const Template: ComponentStory<typeof SubAccountsList> = (args) => <SubAccountsList SubAccounts={mockData[0].subAccounts}/>;

export const SubAccountsList1 = Template.bind({});
SubAccountsList1.args = {};
