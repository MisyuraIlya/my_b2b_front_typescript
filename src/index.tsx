// global
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom';
// local
import './App.scss';
import App from './App';
import { setupStore } from "./store/store";
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

const store = setupStore();
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>

);
