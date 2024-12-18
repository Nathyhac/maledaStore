import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "../App.css"
import { useProductStore } from '../store/ProductStore'



function CreatePage() {



  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  })
  const { createProduct } = useProductStore()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await createProduct(newProduct)
    console.log("success:", success)
    console.log("message:", message)
    toast.success("anouncement created successfully", {
      // position: toast.POSITION.TOP_RIGHT,
    });

  }
  return (
    <div className='form_container'>
      <form action="">
        <h1>Create a product</h1>
        <label htmlFor="name">name</label>
        <input
          placeholder='Name'
          name='name'
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />

        <label htmlFor="price">price</label>
        <input
          type="number"
          name='price'
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />

        <label htmlFor="image">image</label>
        <input
          type="text"
          name='Image'
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />

        <button onClick={handleSubmit}> Submit</button>
        <ToastContainer />

      </form>
    </div>
  )
}

export default CreatePage

