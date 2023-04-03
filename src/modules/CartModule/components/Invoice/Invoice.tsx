import React from 'react';
import './Invoice.styles.scss';
const mockData = {total:190.50, discount:10, tax:30}
const Invoice = () => {
    return (
        <div className='Invoice'>
            <h4>פרטי הזמנה</h4>

            <div className='first_block'>
                <div className='cont_block'>
                    <div className='title'>
                        <span>סה״כ לפני מע״מ</span>
                    </div>
                    <div className='price'>
                        <span>₪{mockData.total}</span>
                    </div>
                </div>
                <div className='cont_block'>
                    <div className='title'>
                        <span>הנחה כללית: </span>
                    </div>
                    <div className='price'>
                        <span>%{mockData.discount}</span>
                    </div>
                </div>
            </div>
            <div className='second_block'>
                <div className='cont_block'>
                    <div className='title'>
                        <span>סה״כ אחרי הנחה</span>
                    </div>
                    <div className='price'>
                        <span>₪{mockData.tax}</span>
                    </div>
                </div>
                <div className='cont_block'>
                    <div className='title'>
                        <span>מע״מ </span>
                    </div>
                    <div className='price'>
                        <span>{mockData.tax}</span>
                    </div>
                </div>
            </div>
            <div className='third_block'>
                <div className='cont_block'>
                    <div className='title'>
                        <span>מחיר לתשלום</span>
                    </div>
                    <div className='price'>
                        <span className='sum'>₪{mockData.total}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Invoice;