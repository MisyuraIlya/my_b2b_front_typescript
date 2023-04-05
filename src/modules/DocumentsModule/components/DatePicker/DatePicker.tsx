import React, {useState} from 'react';
import './DatePicker.styles.scss';
import { MdCalendarMonth } from "react-icons/md";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment-timezone'
const DatePicker = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='DatePicker'>
                {/* <Calendar onChange={onChange} value={value} /> */}
            <div className='calendar_btn'>
                <div className='block'>
                    <p>מתאריך</p>
                    <div className='calendar_card'>
                        <MdCalendarMonth size={24}/>
                        <span>{moment(value).format('DD/MM/YYYY')}</span>
                    </div>
                </div>

                <div className='block'>
                    <p>עד תאריך</p>
                    <div className='calendar_card'>
                        <MdCalendarMonth size={24}/>
                        <span>{moment(value).format('DD/MM/YYYY')}</span>
                    </div>
                </div>
            </div>
            <div className='static_dates'>
                <div className='date_rande'>
                    <p>חודש</p>
                </div>
                <div className='date_rande'>
                    <p>רבעון</p>
                </div>
                <div className='date_rande'>
                    <p>חצי שנה</p>
                </div>
                <div className='date_rande'>
                    <p>שנה</p>
                </div>
            </div>

        </div>
    );
};

export default DatePicker;