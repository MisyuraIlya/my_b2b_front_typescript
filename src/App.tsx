import React from 'react';
import RouterApp from './RouterApp';
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from '@/store/store';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import AuthProvider from './providers/auth-provider/AuthProvider';
import DarkModeProvider from './providers/darkMode-provider/DarkModeProvider';
function App () {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
  <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <AuthProvider Component={{isOnlyUser:false}}>
              <DarkModeProvider>
                <RouterApp/>
              </DarkModeProvider>
            </AuthProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
  </QueryClientProvider>
  );
}

export default App;
