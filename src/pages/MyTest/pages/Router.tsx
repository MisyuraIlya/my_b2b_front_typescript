import HelloWorld from '../../HelloWorld';
import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Users from '../Users/Users';
import AboutPage from './AboutPage';
import ErrorPage from './ErrorPage';
import MainPage from './MainPage';
import UserDetailesPage from './UserDetailesPage';
import UsersForTest from '../../../components/UsersForTest/UsersForTest';
const Router = () => {
    return (
        <div>
            <Link to="/" data-testid="main-link">Main</Link>
            <Link to="/about" data-testid="about-link">about</Link>
            <Link to="/users" data-testid="users-link">users</Link>
            <Routes>
                <Route>
                    <Route path="/" element={<MainPage/>} />
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/users/:id' element={<UserDetailesPage/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                    <Route path='/hello' element={<HelloWorld/>}/>
                    <Route path='users-test' element={<UsersForTest/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export default Router;