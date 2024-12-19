import React from 'react'
import "../App.css"

function ProductCard({product}) {
  return (
    <div className='card'>
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          {product.name}
        </div>
        <div>
            {product.price}
        </div>
      </div>
  )
}

export default ProductCard