import React from 'react';
import './Head.styles.scss'
const Head = () => {
    return (
        <div className='Head'>
            <div className='flex-container'>
                <div className='col-lg-2 center'>
                    <span>יצירת קופון</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>מס קופון</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>מינימום</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>מקסימום</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>הנחה %</span>
                </div>
                <div className='col-lg-2 center'>
                    <span>סטאטוס</span>
                </div>
            </div>
        </div>
    );
};

export default Head;