import React from 'react';
import './CatalogModule.stories.tsx'
import CategoryList from './components/CategoryList/CategoryList';
import HeadOptions from './components/HeadOptions/HeadOptions';
import Pagination from './components/Pagination/Pagination';
import ProductList from './components/ProductList/ProductList';
import BrandList from './components/BrandList/BrandList';
import { CatalogProvider } from './context/CatalogProvider';
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

const queryClient = new QueryClient()
const CatalogModule = () => {
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
};

export default CatalogModule;