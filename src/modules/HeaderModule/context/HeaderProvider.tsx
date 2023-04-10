// Global
import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
import { API_BACKEND } from '../constructor';
import { onSuccessAlert } from '../constructor';
import { useQuery,  } from 'react-query';
import { ICategory } from '../constructor';
interface HeaderContextType {
  HeaderMethods: {

  };
  loading: boolean;
  data: ICategory[];
}

const HeaderContext = createContext<HeaderContextType | null>(null);

// React hook
const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('Can not run without "HeaderProvider"');
  }
  return context;
};

interface HeaderProviderProps {
    children: ReactNode;
};

interface IFetchAllCategoriesResponse {
    data: ICategory[];
  }
  
const HeaderProvider: React.FC<HeaderProviderProps> = (props) => {
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
      cacheTime: 60 * 60 * 1000, // 1 hour
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );
  // Exports
  const HeaderMethods = {

  };
  const value: HeaderContextType = {
    HeaderMethods,
    loading,
    data
  };

  return <HeaderContext.Provider value={value} {...props} />;
};

export { useHeader, HeaderProvider };
