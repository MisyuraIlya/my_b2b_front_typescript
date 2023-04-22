import React, {useEffect, useState} from 'react';
import Hero from './components/Hero/Hero';
import HeroSlider from './components/HeroSlider/HeroSlider';
import SliderCategory from './components/SliderCategory/SliderCategory';
import SliderProduct from './components/SliderProduct/SliderProduct';
import { Container } from './constructor';
import { IProduct } from './constructor';
import { ICategory } from './constructor';
import { HomeProvider } from './context/HomeProvider';
import SliderContainer from './components/SliderContainer/SliderContainer';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useActions } from '../AuthModule/constructor';


const HomeModule = () => {

    return (
        <div>
            <h4 className='dark:text-gray-100 dark:bg-slate-900 duration-100'>hello world</h4>
            {/* <div className='HomeModule'>
                <Hero/>
                <HeroSlider/>
                <Container>
                    <SliderContainer/>
                </Container>
            </div> */}
                <div className="h-screen bg-white dark:bg-black">
                    <p className="text-lg dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed risus
                        vel ex lobortis lacinia. Phasellus sodales tellus quis sapien ultrices
                        vestibulum.
                    </p>
                </div>
                {/* <button onClick={() => toggleMode()}>toggle</button> */}
        </div>

    );
};

export default HomeModule;