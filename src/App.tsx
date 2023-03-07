import axios from 'axios';
import React from 'react';
import PostContainer from './pages/PostContainer';
import ProductContainer from './pages/ProductContainer';
import RouterExample from './tests/integration/examples/RouterExample';

function App () {
  return (
    <div className="App">
      <div className='test'>
        <h1>hello asd</h1>
        {/* <Home/> */}
        {/* <PostContainer/> */}
        {/* <ProductContainer/>y */}
        <RouterExample/>
      </div>
    </div>
  );
}

export default App;
