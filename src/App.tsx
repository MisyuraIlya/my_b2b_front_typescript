import React from 'react';
import PostContainer from './pages/PostContainer';
import ProductContainer from './pages/ProductContainer';

function App () {
  return (
    <div className="App">
      <div className='test'>
        <h1>hello asd</h1>
        {/* <Home/> */}
        <PostContainer/>
        <ProductContainer/>
      </div>
    </div>
  );
}

export default App;
