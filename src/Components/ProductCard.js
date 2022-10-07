import React from 'react';
import { Link } from 'react-router-dom';


function ProductCard({product}) {
const {name, price, description, images} = product;

  return (
    
    <div className="container">
  
  <div className="card">
    
    <p className="card__name"> {name} </p>
    <p className='id-text'> {price} </p>
    <p className='product-text'> {description}  </p>
    <p  className="card__image"> {images} </p>
    
    <button className='btn-details' > <Link className='btn-link' to={`/product/${product.id}`} > DETAILS </Link></button>
    
    </div>
    </div>
  )
}

export default ProductCard;