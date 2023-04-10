import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import CartPage from '@pages/CartPage/CartPage';
import PostPage from '@pages/PostPage/PostPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';
import Header from './components/layout/Header/Header';
import AuthPage from './pages/AuthPage/AuthPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import { HeaderModule } from './modules/HeaderModule';
const RouterApp = () => {
    return (
        <div>
            {/* <Header/> */}
            <HeaderModule/>
            {/* <AuthPage/> */}
            <Link to="/" data-testid="home-link">Home</Link>
            <Link to="/auth" data-testid="cart-link">auth</Link>
            <Link to="/post" data-testid="post-link">Post</Link>
            <Link to="/login" data-testid="cart-link">Login</Link>
            <Link to="/registration" data-testid="post-link">Registration</Link>
            <Link to="/catalog" data-testid="post-link">Catalog</Link>
            <Routes>
                <Route>
                    {/* <Route path="/" element={<HomePage/>} /> */}
                    <Route path='/auth' element={<AuthPage/>}/>
                    <Route path='/catalog' element={<CatalogPage/>}/>
                    {/* <Route path='/catalog' element={<CatalogPage/>}/> */}
                    {/* <Route path='/login' element={<LoginPage/>}/> */}
                    {/* <Route path='/registration' element={<RegistrationPage/>}/> */}
                    {/* <Route path='/*' element={<ErrorPage/>}/> */}
                </Route>
            </Routes>
        </div>
    );
};

export default RouterApp;