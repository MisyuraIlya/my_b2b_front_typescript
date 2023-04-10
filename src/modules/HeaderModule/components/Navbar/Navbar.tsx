import React, { useState } from 'react';
import './Navbar.styles.scss';
import { useHeader } from '../../context/HeaderProvider';
import { ICategory } from '../../constructor';
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
    const [modalItem, setModalItem] = useState<ICategory>()
    const {data} = useHeader()
    const handleMouseEnter = (item: ICategory) => {
      setIsMouseOn(true);
      setModalItem(item)
    };
  
    const handleMouseLeave = () => {
      setIsMouseOn(false);
      setModalItem()
    };
    return (
        <div onMouseLeave={handleMouseLeave}>
            <div className='Navbar' >
                <div className='list'>
                    <ul>
                        {data?.map((item,index) =>
                            <li key={index} className="pointer" onMouseEnter={() => handleMouseEnter(item)}>
                                <p>{item.name}</p>
                            </li>
                        )}
                    </ul>
                </div>
                {isMouseOn &&
                <div className='modal' >
                    <ul>
                        {modalItem?.children?.map((item,index) => 
                            <li key={index} className="pointer">
                                <div className='img_cont center'>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className='title_cont center'>
                                    <p>{item.name}</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                }
            </div>
        </div>

    );
};

export default Navbar;