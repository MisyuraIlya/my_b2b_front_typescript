import React, { useState } from 'react';
import { MdSearch } from "react-icons/md";

const mockData = [
    {id:1, title:'product a', sku:'1', price:10},
    {id:2, title:'product b', sku:'2', price:11},
    {id:2, title:'product c', sku:'3', price:12},
]
const Searchbar = () => {
    const [active, setActive] = useState(mockData)
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className='searchModule'>
            <div className='Searchbar'>
                <input type='text' placeholder='search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <MdSearch/>
                {active && searchValue &&
                <div className='modal'>
                    <div className="list">
                        {mockData?.map((item,key) => 
                            <div key={key}  className='item flex-container'>
                                <div className='img_content col-lg-3 center'>
                                    <img src={'https://amit-pastry-b2b.com/src/img/placeholder.jpg'} />
                                </div>    
                                <div className='content col-lg-9'>
                                    <p className='title'>{item.title}</p>
                                    <p className='catalog'>{item.sku}</p>
                                    <p className='price'>{item.price}</p>
                                </div> 
                            </div>    
                        )}
                    </div>       
                </div>
                }
            </div>


        </div>

    );
};

export default Searchbar;