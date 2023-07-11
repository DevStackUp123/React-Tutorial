import React from 'react'
import{Link} from 'react-router-dom'
import products from './Data';
function Product() {
  console.log(products);
  return (
    <div className='pro'>
    <div className='product'>
      <h1>Product page</h1>
      
      <div className="products">
        {
          products.map((product)=>{
            console.log(product);
            return(
              <article key={product.id}>
               
               <h5>{product.name}</h5>
               <Link to={'/product/' + product.id}> More info</Link>
          
              </article>
            )
          })
        }
      </div>
     </div>
    </div>
  )
}

export default Product
