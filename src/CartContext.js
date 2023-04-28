import { createContext,useState,useEffect } from "react";
import { getProductsData } from "./productsDummy";

export const CartContext = createContext({
    items:[],
    getProductQuantity:()=>{},
    addOneToCart:()=>{},
    removeOneFromCart:()=>{},
    deleteFromCart:()=>{},
    getTotalCost:()=>{},
});

export const CartProvider = ({children})=>{
    const [cartProducts,setCartProducts] = useState([]);

    useEffect(()=>{
console.log("cartProducts",cartProducts)
    },[cartProducts])
const getProductQuantity=(id)=>{
   const item = cartProducts.find(product=>product.id === id);
   return item ?item.quantity:0;
}
const addOneToCart=(id)=>{
    const quantity= getProductQuantity(id);
    if(quantity === 0){
        setCartProducts([
            ...cartProducts,
            {
                id: id,
                quantity:1
            }
        ])
    }else{
        setCartProducts(
            cartProducts.map(
                product => product.id === id?
                {...product, quantity:quantity+1}:product
            )
        )
    }
}
const removeOneFromCart=(id)=>{
    const quantity= getProductQuantity(id);
    if(quantity === 1){
        deleteFromCart(id)
    }else{
        setCartProducts(
            cartProducts.map(
                product => product.id === id?
                {...product, quantity:quantity-1}:product
            )
        )
    }
}
const deleteFromCart=(id)=>{
    setCartProducts(
        cartProducts.filter( product => product.id !== id )
    )
}
const getTotalCost=(id)=>{
    let totalCost = 0;
    cartProducts.forEach((cartItem)=>{
        const productData = getProductsData(cartItem.id);
        totalCost += (productData.price * cartItem.quantity)
    })
    return totalCost;
}
    const contextValue ={
        items:cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}