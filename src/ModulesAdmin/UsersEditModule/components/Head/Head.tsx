import React from 'react';
import './Head.styles.scss'
const Head = () => {
    return (
        <div className='Head'>
            <div className='flex-container'>
                <div className='col-lg-1 center'>
                    <span>מס</span>
                </div>
                <div className='col-lg-3 center'>
                    <span>לקוח</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>סוג</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>סטאטוס</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>מידע</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>פעולת</span>
                </div>
            </div>
        </div>
    );
};

export default Head;