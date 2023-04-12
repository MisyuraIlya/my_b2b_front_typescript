// Global
import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
import { API_BACKEND } from '../constructor';
import { onSuccessAlert } from '../constructor';
import { useQuery,  } from 'react-query';
import { ICategory } from '../constructor';
import { IProduct } from '../constructor';

interface selectedIds {
  lvl1: number | null,
  lvl2: number | null,
  lvl3: number | null
}
interface CatalogContextType {
  CatalogMethods: {
    fetchAllProducts
    setTotalSize
  };
  categoriesLoading: boolean;
  categoriesData: ICategory[];
  productsLoading: boolean;
  // productsData: IProduct[];
  products: IProduct[];
  totalSize;
  categoryIds: selectedIds;
  loading: boolean
}

const CatalogContext = createContext<CatalogContextType | null>(null);

// React hook
const useCatalog = (): CatalogContextType => {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error('Can not run without "CatalogProvider"');
  }
  return context;
};

interface CatalogProviderProps {
    children: ReactNode;
};

interface IFetchAllCategoriesResponse {
    data: ICategory[];
  }
  
const CatalogProvider: React.FC<CatalogProviderProps> = (props) => {
  // state
  const [loading, setLoading] = useState(false);
  const [allowRegister, setAllowRegister] = useState(false);
  const [products, setProducts] = useState([])
  const [totalSize, setTotalSize] = useState(10)
  const [categoryIds, setCategoryIds] = useState({})
  // Helpers
  const { isLoading: isCategoriesLoading, error: categoriesError, data: categoriesData } = useQuery(
    'categories',
    () =>
      fetch('https://digitrade.store/my_test/src/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          classPoint: 'CategoriesController',
          funcName: 'FetchAllCategories',
        }),
      }).then((res) =>
        res.json().then((data) => {
          return data.data;
        })
      ),
    {
      useErrorBoundary: true,
      cacheTime: 60 * 60 * 1000, // 1 hour
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );


  // const { isLoading: isProductsLoading, error: productsError, data: productsData } = useQuery(
  //   'products',
  //   () =>
  //     fetch('https://digitrade.store/my_test/src/index.php', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         classPoint: 'ProductsController',
  //         funcName: 'FetchProducts',
  //         val: val

  //       }),
  //     }).then((res) =>
  //       res.json().then((data) => {
  //         console.log(data)
  //         return data.data;
  //       })
  //     ),
  //   {
  //     useErrorBoundary: true,
  //     cacheTime: 60 * 60 * 1000, // 1 hour
  //     staleTime: 5 * 60 * 1000, // 5 minutes
  //   }
  // );
  


  // Exports
  

  const fetchAllProducts = async (selectedIds: selectedIds, totalPageSize: number = totalSize): Promise<IProduct[]> => {
    setCategoryIds(selectedIds)
    setLoading(true)
    let val = {
      lvl1: selectedIds.lvl1,
      lvl2: selectedIds.lvl2,
      lvl3: selectedIds.lvl3,
      pageSize: totalPageSize ? totalPageSize : totalSize,
      page: "1"
    }
    try {
    const res = await axios.post(`${API_BACKEND}`, {
      classPoint: 'ProductsController',
      funcName: 'FetchProducts',
      val: val
    });
    setProducts(res.data.data.data);
    } catch(e) {
      console.log(e)
    } finally {
      setLoading(false)
    }

  };

  const CatalogMethods = {
    fetchAllProducts,
    setTotalSize
  };
  const value: CatalogContextType = {
    CatalogMethods,
    categoriesLoading: isCategoriesLoading,
    categoriesData,
    // productsLoading: isProductsLoading,
    // productsData,
    products,
    totalSize,
    categoryIds,
    loading
  };

  return <CatalogContext.Provider value={value} {...props} />;
};

export { useCatalog, CatalogProvider };
