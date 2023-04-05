import React from 'react';
import './CatalogModule.stories.tsx'
import CategoryList from './components/CategoryList/CategoryList';
import HeadOptions from './components/HeadOptions/HeadOptions';
import Pagination from './components/Pagination/Pagination';
import ProductList from './components/ProductList/ProductList';
const CatalogModule = () => {
    return (
        <div className='CatalogModule'>
            <div className='flex-container'>
                <div className='col-lg-4'>
                    <CategoryList/>
                </div>
                <div className='col-lg-8'>
                    <HeadOptions/>
                    <ProductList/>
                    <Pagination/>
                </div>
            </div>
        </div>
    );
};

export default CatalogModule;