// global
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom';
// local
import './App.scss';
import App from './App';
import {persistor, store} from '@/store/store';
// import { setupStore } from "./store/store";
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>

);
