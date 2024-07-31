import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react';
import all_products from '../../assets/allProducts';


   export const productContext = createContext(null);

   const defaultCart = ()=>{

      let cart={};

      for(let i=1; i<all_products.length+1; i++){
         cart[i] = 0;
      }

      return cart;
   }

   const defaultWishlet = ()=>{

      let wish={};

      for(let i=1; i<all_products.length+1; i++){
         wish[i] = false;
      }

      return wish;
   }

export default function Context(props) {


   const [cartItem, setCartItem]  = useState(defaultCart());
   const [wishItem, setwishItem]  = useState(defaultWishlet());

    const addToCart = (prodId)=>{
      setCartItem((prev)=>({...prev, [prodId]:prev[prodId]+1 }))
      
    }

    const removeFromCart = (prodId)=>{
      setCartItem((prev)=>({...prev, [prodId]:prev[prodId]-1 }))
      
    }

    const deleteCartItem = (prodId)=>{

         setCartItem((prev)=>({...prev, [prodId]:0}))
    }

    const totalCartAmount = ()=>{

      let totalAmount = 0;

      for(const item in cartItem){
         if(cartItem[item]>0){

            const itemPrice = all_products.find((e)=>e.id===Number(item));
          totalAmount += itemPrice.price * cartItem[item] ;
         
         }
      }
    
      return totalAmount;
    }

    const totalCartItem = ()=>{
      let totalItem = 0;
        for(const item in cartItem){
           
            if(cartItem[item]>0){
              
                totalItem += cartItem[item] ;
               
            }
            
        }
        return totalItem;
    }

    const toggleWishlet = (prodId)=>{
      setwishItem((prev)=>({...prev, [prodId]:!prev[prodId] }));
    }

   const totalWishletItem = ()=>{
      let totalItem = 0;
      for(const item in wishItem){
         
          if(wishItem[item]>0){
            
              totalItem += wishItem[item] ;
             
          }
          
      }
      return totalItem;
   }

    const contextValue = {all_products, addToCart,removeFromCart, totalCartAmount,totalCartItem,deleteCartItem, cartItem, wishItem, toggleWishlet, totalWishletItem};

  return (
   <productContext.Provider value={contextValue}>
      {props.children}
   </productContext.Provider>
  )
}