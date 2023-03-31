import React, { useState } from 'react';
import './Navbar.styles.scss';

const mockData = [
    {id:1, category:'categoryA', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:2, category:'categoryB', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:3, category:'categoryC', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:4, category:'categoryD', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:5, category:'categoryE', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:6, category:'categoryF', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:7, category:'categoryG', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:8, category:'category1', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:9, category:'category2', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:10, category:'category3', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:11, category:'category4', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:12, category:'category5', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:13, category:'category6', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:14, category:'category7', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
]

const mockDataLvl2 = [
    {id:1, category:'categoryA', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:2, category:'categoryB', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:3, category:'categoryC', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:4, category:'categoryD', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
    {id:5, category:'categoryE', imgLink:'https://amit-pastry-b2b.com/src/img/categories/9182132.jpg'},
]
const Navbar = () => {
    const [isMouseOn, setIsMouseOn] = useState(false);

    const handleMouseEnter = () => {
      setIsMouseOn(true);
    };
  
    const handleMouseLeave = () => {
      setIsMouseOn(false);
    };
    return (
        <div className='Navbar' >
            <div className='list'>
                <ul>
                    {mockData?.map((item,index) =>
                        <li key={index} className="pointer" onMouseEnter={handleMouseEnter}>
                            <p>{item.category}</p>
                        </li>
                    )}
                </ul>
            </div>
            {isMouseOn &&
            <div className='modal' onMouseLeave={handleMouseLeave}>
                <ul>
                    {mockDataLvl2?.map((item,index) => 
                        <li key={index} className="pointer">
                            <div className='img_cont center'>
                                <img src={item.imgLink} alt="" />
                            </div>
                            <div className='title_cont center'>
                                <p>{item.category}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            }
        </div>
    );
};

export default Navbar;