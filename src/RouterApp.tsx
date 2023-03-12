import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import CartPage from '@pages/CartPage/CartPage';
import PostPage from '@pages/PostPage/PostPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';
const RouterApp = () => {
    return (
        <div>
            <Link to="/" data-testid="home-link">Home</Link>
            <Link to="/cart" data-testid="cart-link">Cart</Link>
            <Link to="/post" data-testid="post-link">Post</Link>
            <Link to="/login" data-testid="cart-link">Login</Link>
            <Link to="/registration" data-testid="post-link">Registration</Link>
            <Routes>
                <Route>
                    <Route path="/" element={<HomePage/>} />
                    <Route path='/cart' element={<CartPage/>}/>
                    <Route path='/post' element={<PostPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/registration' element={<RegistrationPage/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default RouterApp;