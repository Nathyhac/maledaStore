import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }), 
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "All fields must be filled" };
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
        
        return {success:true, message:"product created"}

    }

}))