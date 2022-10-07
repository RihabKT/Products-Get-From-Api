import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';


const ProductList = ({filterByName}) =>{

const [Products, setProducts]= useState([]);
const fetchProducts = () =>{
    axios.get("https://recursing-hellman.135-125-93-148.plesk.page/api/products")
     
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))
}


useEffect( () => {
    fetchProducts ()
}, [])

return(
   
    
    <div className='grid-product'>
        
        {Products.filter(el => el.name.toLowerCase().includes(filterByName.toLowerCase().trim())).map((el,i) => <ProductCard product={el} key={i} />)}
    </div>
    
)}



export default ProductList;