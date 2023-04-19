import React, { useEffect } from 'react';
import SliderCategory from '../SliderCategory/SliderCategory';
import SliderProduct from '../SliderProduct/SliderProduct';
import { useHome } from '../../context/HomeProvider';
const SliderContainer = () => {
    const {HomeMethods,products,categoriesData} = useHome()

    useEffect(() => {
        HomeMethods.fetchAllProducts()
    },[])
    console.log('products,categoriesData',products,categoriesData)
    return (
        <div>
            <SliderCategory slides={4} data={categoriesData}/>
            <SliderProduct slides={4} data={products}/> 
        </div>
    );
};

export default SliderContainer;