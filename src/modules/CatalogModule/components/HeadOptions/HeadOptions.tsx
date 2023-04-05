import React from 'react';
import { SelectBox } from '../../constructor';
import { MdFormatListBulleted, MdWindow } from "react-icons/md";
import { Input } from '../../constructor';
import { useForm } from "react-hook-form";

const mockData = {id:1, total:'123'}
type Inputs = {
    searchValue: string,
  };

const HeadOptions = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const select = (id:string) => {
        console.log(id)
    }
    const select2 = (id:string) => {
        console.log(id)
    }
    return (
        <div className='HeadOptions'>
            <div className='flex-container content'>
                <div className='col-lg-2 center'>
                    <p>נמצאו: {mockData.total} </p>
                </div>
                <div className='col-lg-4 center'>
                    <div className='search'>
                        <Input type='text' placeholder='חיפוש'  hookForm={{...register("searchValue")}} />
                    </div>
                </div>
                <div className='col-lg-2 center'>
                    <div className='box'>
                        <p>מוצרים: </p>
                        <div className='selectBox'>
                            <SelectBox options={[{value:'1', label:'1'}, {value:'2', label:'2'}]} onSelect={select}/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 center'>
                    <div className='box'>
                        <p>מיון: </p>
                        <div className='selectBox'>
                            <SelectBox options={[{value:'1', label:'1'}, {value:'2', label:'2'}]} onSelect={select2}/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 center'>
                    <p>תצוגה:</p>
                    <div className='views'>
                        <div className='icon'>
                            <MdFormatListBulleted size={24}/>
                        </div>
                        <div className='icon'>
                            <MdWindow size={24} />
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default HeadOptions;