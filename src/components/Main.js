import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';

const Main = (props) => {
  const {products, onAdd} = props; //object destructuring

  return(
      <main className="block col-2">
        <h2>Products</h2>

        <div className="row">
          {products.map((product) => (
            <Product 
              key={product.id} 
              product={product} 
              onAdd={onAdd}
            />
          ))}
        </div>
      </main>
  )
}


export default Main;