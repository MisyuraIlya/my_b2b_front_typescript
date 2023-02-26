import axios from 'axios';
import React from 'react';
import Router from './pages/MyTest/pages/Router';
import Users from './pages/MyTest/Users/Users';
import PostContainer from './pages/PostContainer';
import ProductContainer from './pages/ProductContainer';

function App () {
  return (
    <div className="App">
      <div className='test'>
        <h1>hello asd</h1>
        {/* <Home/> */}
        {/* <PostContainer/> */}
        {/* <ProductContainer/>y */}
        <Router/>
      </div>
    </div>
  );
}

export default App;
