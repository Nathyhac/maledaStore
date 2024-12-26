import React from 'react'
import "../App.css"
import { MdDeleteForever } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useProductStore } from '../store/ProductStore'
import { ToastContainer, toast } from "react-toastify";


function ProductCard({ product }) {

    const {deleteProduct} = useProductStore()
    const handleDelete=async(pid)=>{
        const {success, message} = await deleteProduct(pid)
        if(!success){
          toast.success("anouncement created successfully", {
             });   
        }
    }
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
            <div >
                <MdDeleteForever onClick={()=>handleDelete(product._id)}/>
            </div>

        </div>
    )
}

export default ProductCard