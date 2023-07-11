import React from 'react'
import{Link,useParams} from 'react-router-dom'
import products from './Data';
function SingleProduct() {
  // console.log(useParams());
  // console.log("single",product);
  const {productID}=useParams();
   const profind= products.find((pro)=>
    pro.id === productID);
    console.log("profind",profind);
  
     const{image,name}=profind  
  
  return (
    <div className='singlepro'>
      <img src={image} alt='img' />
      <h3>{name}</h3>
      <Link to='/product'>Back to Product Page</Link>
    </div>
  )
}

export default SingleProduct
