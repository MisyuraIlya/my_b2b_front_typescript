import React from 'react';
import { SelectBox } from '../../constructor';
import { MdFormatListBulleted, MdWindow } from "react-icons/md";


const mockData = {id:1, total:'123'}
const HeadOptions = () => {
    const select = (id:string) => {
        console.log(id)
    }
    const select2 = (id:string) => {
        console.log(id)
    }
    return (
        <div className='HeadOptions'>
            <div className='flex-container'>
                <div className='col-lg-2'>
                    <p>נמצאו: {mockData.total} </p>
                </div>
                <div className='col-lg-4'>
                    חיפוש
                </div>
                <div className='col-lg-2'>
                    <div className='box'>
                        <p>מוצרים: </p>
                        <SelectBox options={[{value:'1', label:'1'}, {value:'2', label:'2'}]} onSelect={select}/>
                    </div>
                </div>
                <div className='col-lg-2'>
                    <div className='box'>
                        <p>מיון: </p>
                        <SelectBox options={[{value:'1', label:'1'}, {value:'2', label:'2'}]} onSelect={select2}/>
                    </div>
                </div>
                <div className='col-lg-2'>
                    <p>תצוגה</p>
                    <div className='views'>
                        <MdFormatListBulleted size={24}/>
                        <MdWindow size={24} />
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default HeadOptions;