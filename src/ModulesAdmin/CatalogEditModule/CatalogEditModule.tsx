import React from 'react';
import CatalogEditList from './components/CatalogEditList/CatalogEditList';
import Head from './components/Head/Head';
import { Container } from './constructor';
const CatalogEditModule = () => {
    return (
        <div>
            <Container>
                <Head/>
                <CatalogEditList/>
            </Container>
        </div>
    );
};

export default CatalogEditModule;