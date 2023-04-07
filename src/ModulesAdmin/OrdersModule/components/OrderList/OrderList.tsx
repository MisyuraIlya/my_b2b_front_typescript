import React, {useState} from 'react';
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4'
import SubOrderList from '../SubOrderList/SubOrderList';

const mockproeudt = [
    {id:1, title:'productA', quantity:1, price:85},
    {id:2, title:'productA', quantity:1, price:85},
    {id:3, title:'productA', quantity:1, price:85},
    {id:4, title:'productA', quantity:1, price:85},
    {id:5, title:'productA', quantity:1, price:85},
]
const mockData = [
    {id:1, orderNumber:'123', clientName:'ilya', date:'2021-02-02', time:'10:32', totalSub:'964.2', payment:false, comment:'123', products:mockproeudt},
    {id:2, orderNumber:'123', clientName:'ilya', date:'2021-02-02', time:'10:32', totalSub:'964.2', payment:false, comment:'123', products:[]},
    {id:3, orderNumber:'123', clientName:'ilya', date:'2021-02-02', time:'10:32', totalSub:'964.2', payment:false, comment:'123', products:mockproeudt }
]

const OrderList = () => {

    const [activeSub, setActiveSub] = useState<boolean[]>([])

    const handleClick = (id:number) => {
        const updatedStates = [...activeSub];
        updatedStates[id] = !updatedStates[id];
        setActiveSub(updatedStates);
    } 

    return (
        <div className='OrderList'>
            {mockData?.map((item,index) =>
                <>
                <div className='flex-container card' key={index}>
                    <div className='col-lg-1'>
                        <UseAnimations 
                            animation={menu4}
                            size={35}
                            onClick={() => handleClick(item.id)}
                        />
                    </div>
                    <div className='col-lg-1'>
                        <span>{item.orderNumber}</span>
                    </div>
                    <div className='col-lg-3'>
                        <span>{item.clientName}</span>
                    </div>
                    <div className='col-lg-2'>
                        <span>{item.date}</span>
                    </div>
                    <div className='col-lg-1'>
                        <span>{item.time}</span>
                    </div>
                    <div className='col-lg-1'>
                        <span>{item.totalSub}</span>
                    </div>
                    <div className='col-lg-1'>
                        <span>{item.payment? 'אשראי' :'ללא'}</span>
                    </div>
                    <div className='col-lg-1'>
                        <span>{item.comment}</span>
                    </div>
                    <div className='col-lg-1'>
                        <span>פעולות</span>
                    </div>
                </div>
                { activeSub[item.id] &&  
                    <SubOrderList Products={item.products} />
                }
 
                </>
    
            )}
        </div>
    );
};

export default OrderList;