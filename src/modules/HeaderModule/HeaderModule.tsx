import React from 'react';
import '../../App.scss'
import './HeaderModule.styles.scss'
import { Container } from './constructor';
import Iconsbar from './components/IconsBar/Iconsbar';
import Searchbar from './components/Searchbar/Searchbar';
import Navbar from './components/Navbar/Navbar';
const HeaderModule = () => {
    return (
        <div className='HeaderModule'>
            <Container>
                <div className='flex-container'>
                    <div className='col-lg-4 center'>
                        <Iconsbar/>
                    </div>
                    <div className='col-lg-4 center'>
                        <Searchbar/>
                    </div>
                    <div className='col-lg-4 center'>
                        <img src="https://amit-pastry-b2b.com/src/img/logo.png" alt="logo" style={{width:'45px'}}/>
                    </div>      
                </div>
                <Navbar/>
            </Container>
        </div>
    );
};

export default HeaderModule;    