import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useProductStore } from '../store/ProductStore'
import ProductCard from '../components/ProductCard';


function homePage() {

  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();

  }, [fetchProducts]);
  console.log("products", products)
  return (
    <div className='Home-container'>
      {products.map((product)=>(
        <ProductCard key={product._id} product={product}/>
      ))}
      <Link
        to={{
          pathname: "/create",

        }}

      >
        <p>No items found</p>
      </Link>

    </div>
  )
}

export default homePage