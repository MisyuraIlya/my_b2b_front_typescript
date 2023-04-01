import React from 'react';
import Hero from './components/Hero/Hero';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Slider from './components/Slider/Slider';
import { Container } from './constructor';
const HomeModule = () => {
    return (
        <div className='HomeModule'>
            <Hero/>
            <HeroSlider/>
            <Container>
                <Slider/>
            </Container>
        </div>
    );
};

export default HomeModule;