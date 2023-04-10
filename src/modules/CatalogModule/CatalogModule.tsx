import React from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import HeadOptions from './components/HeadOptions/HeadOptions';
import Pagination from './components/Pagination/Pagination';
import ProductList from './components/ProductList/ProductList';
import BrandList from './components/BrandList/BrandList';
import { CatalogProvider } from './context/CatalogProvider';
import './CatalogModule.styles.scss';

const CatalogModule = () => {
    return (
            <CatalogProvider>
                <div className='CatalogModule'>
                    <div className='flex-container'>
                        <div className='col-lg-4'>
                            <CategoryList/>
                            <BrandList/>
                        </div>
                        <div className='col-lg-8'>
                            <HeadOptions/>
                            <ProductList/>
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </CatalogProvider>
    );
};

export default CatalogModule;