import React, {useState} from 'react';
import './Head.styles.scss';
import { MyCalendar, Input } from '../../constructor';
import { useForm } from "react-hook-form";

type InputProp = {
    searchValue: string,
};

const mockData = {id:1, totalSum:100000, totalOrder:100}
const Head = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<InputProp>();
    const [fromDate, setFronDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [showAll, setShowAll] = useState('הכל')
    return (
        <div className='head'>
            <div className='flex-container'>
                <div className='col-lg-2 center'>
                    <MyCalendar date={fromDate} onChangeDate={setFronDate}/>
                </div>
                <div className='col-lg-2 center'>
                    <MyCalendar date={toDate} onChangeDate={setToDate}/>
                </div>
                <div className='col-lg-2 center'>
                    <Input type='text' placeholder='חיפוש' hookForm={{...register("searchValue")}}/>
                </div>
                <div className='col-lg-2 center'>
                    <div className='wrap'>
                        <span>{mockData.totalSum}</span>
                    </div>
                </div>
                <div className='col-lg-2 center'>
                    <div className='wrap'>
                        <span>{mockData.totalOrder}</span>
                    </div>
                </div>
                <div className='col-lg-2 center'>
                    <div className='options'>
                        <div className={`option ${showAll == 'הכל' ? 'active' : '' }`} onClick={() => setShowAll('הכל')}>
                            <span>הכל</span>
                        </div>
                        <div className={`option ${showAll == 'סורב' ? 'active' : '' }`} onClick={() => setShowAll('סורב')}>
                            <span>סורב</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;