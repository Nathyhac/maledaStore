import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }), 
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: message };
        }

        const res = await fetch("/api/product", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
            

        })

        const data = await res.json();
        set((state) => ({
            products: [...state.products, data.data]
        }));
        
        return {success:true, message:message}

    },
    fetchProducts: async()=>{
        const res = await fetch("/api/product" )
        const data= await res.json()
        set({products:data.data})

    },
    deleteProduct:async(pid)=>{
        const res =  await fetch(`/api/product/${pid}`, {
            method:"DELETE",
            headers: {
                "content-type": "application/json"
            },

           
        });
        const data = await res.json()
        if(!data.success) return{success:false, message:"unable to delete the product"} 

        set(state=>({products:state.products.filter(product=>product._id!==pid)}))
        return {success:true, message:data.message}
    }

}))