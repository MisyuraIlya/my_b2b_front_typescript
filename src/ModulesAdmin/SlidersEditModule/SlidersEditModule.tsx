import React from 'react';
import Head from './components/Head/Head';
import SliderList from './components/SliderList/SliderList';
import './SlidersEditModule.styles.scss';
const SlidersEditModule = () => {
    return (
        <div className='SlidersEditModule'>
            <Head/>
            <SliderList/>
        </div>
    );
};

export default SlidersEditModule;