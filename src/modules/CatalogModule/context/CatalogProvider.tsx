// Global
import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
import { API_BACKEND } from '../constructor';
import { onSuccessAlert } from '../constructor';
import { useQuery,  } from 'react-query';
import { ICategory } from '../constructor';
interface CatalogContextType {
  CatalogMethods: {

  };
  loading: boolean;
  data: ICategory[];
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

  // Helpers

  const { isLoading, error, data } = useQuery(
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
    }
  );
  // Exports
  const CatalogMethods = {

  };
  const value: CatalogContextType = {
    CatalogMethods,
    loading,
    data
  };

  return <CatalogContext.Provider value={value} {...props} />;
};

export { useCatalog, CatalogProvider };
