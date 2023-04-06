import React from 'react';
import './Head.styles.scss'
const Head = () => {
    return (
        <div className='Head'>
            <div className='flex-container'>
                <div className='col-lg-1 center'>
                    <span>כניסה</span>
                </div>
                <div className='col-lg-1 center'>
                    <span>סדר</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>תמונה</span>
                </div>
                <div className='col-lg-1 center'>
                    <span>מזהה</span>
                </div>
                <div className='col-lg-1 center'>
                    <span>כותרת</span>
                </div>
                <div className='col-lg-6'>
                    <div className='flex-container'>
                        <div className='col-lg-3 center'>
                            <span>סטטוס</span>
                        </div>
                        <div className='col-lg-3 center'>
                            <span>מחיקה</span>
                        </div>
                        <div className='col-lg-3 center'>
                            <span>עריכה</span>
                        </div>
                        <div className='col-lg-3 center'>
                            <span>פעולות</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;