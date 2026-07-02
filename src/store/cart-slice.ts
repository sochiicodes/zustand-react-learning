import type { CartProduct } from "@/types/cartProducts"
import type { Product } from "@/types/products"
import type { StateCreator } from "zustand"

interface CartState{
    products: CartProduct[]
    total: number
}

type CartActions = {
    addProduct: (product: Product) => void
    removeProduct: (productId: string) => void
    incQty: (productId: string) => void
    decQty: (productId: string) => void
    getProductById: (productId: string) => CartProduct | undefined
    setTotal: (total: number) => void
    reset: () => void
}

export type CartSlice = CartState & CartActions

const initialState: CartState ={
    products: [],
    total: 0
}

//export const useStore = create((set) =>({}))

export const createCartSlice: StateCreator<CartSlice, [['zustand/immer', never]], [], CartSlice> = (set, get) => ({
    ...initialState,
    incQty: (productId) => set((state: CartState) => {
        const foundProduct = state.products.find(
            (product) => product.id === productId
        )
        console.log("before", foundProduct);
        if(foundProduct){
            foundProduct.qty += 1
        }
    }),
    decQty: (productId) => set((state: CartState) => {
        const foundIndex = state.products.findIndex((product) => product.id === productId)

        if(foundIndex !== -1){
            if(state.products[foundIndex].qty === 1){
                state.products.splice(foundIndex, 1)
            }else{
               state.products[foundIndex].qty -= 1 
            }
        }
    }),

    addProduct: (product) => set((state) =>{
        state.products.push({...product, qty: 1})
    }),

    removeProduct: (productId) => set((state: CartState) =>{
        state.products = state.products.filter((product)=> product.id !== productId)
    }),

    getProductById: (productId) => get().products.find((product) => product.id === productId),

    setTotal: (total) => set((state) =>{
        state.total = total
    }),

    reset: () => set(() => initialState)

})
