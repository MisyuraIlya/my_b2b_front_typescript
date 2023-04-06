import React from 'react';
import Head from './components/Head/Head';
import UsersList from './components/UsersList/UsersList';
import { Container } from './constructor';
const UsersEditModule = () => {
    return (
        <div>
            <Container>
                <Head/>
                <UsersList/>
            </Container>
        </div>
    );
};

export default UsersEditModule;