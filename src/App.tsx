import axios from 'axios';
import React from 'react';
import PostContainer from './modules/PostModule/components/PostContainer';
import ProductContainer from './modules/CartMoudle/Components/ProductContainer/ProductContainer';
import RouterExample from './tests/integration/examples/RouterExample';
import RouterApp from './RouterApp';
function App () {
  return (
    <div className="App">
      <div className='test'>
        <RouterApp/>
        {/* <Home/> */}
        {/* <PostContainer/> */}
        {/* <ProductContainer/> */}
        {/* <RouterExample/> */}
      </div>
    </div>
  );
}

export default App;
