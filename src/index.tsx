// global
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// local
import './App.scss';
import App from './App';
import { setupStore } from "./store/store";

// for test
// import { createReduxStore } from './pages/MyTest/redux/store/reducers/store';
import { createReduxStore } from './tests/integration/examples/redux/store/reducers/store';
const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
