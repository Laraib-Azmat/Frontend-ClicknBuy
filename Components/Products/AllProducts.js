import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import productStyle from './ProductStyle'
import { productContext } from '../Context/Context'
import ProductDisplay from '../ProductDisplay/ProductDisplay';

export default function AllProducts() {

    const  value=useContext(productContext);
   

  return (
    <View style={{gap:30, alignItems:'center', justifyContent:'center'}}>
      
      <View style={{flexDirection:'row', gap:10, justifyContent:'center'}}>

            <Pressable  style={productStyle.selectProduct}><Text style={productStyle.allproductText}>All</Text></Pressable>
            <Pressable  style={productStyle.selectProduct}><Text style={productStyle.allproductText}>Popular</Text></Pressable>
            <Pressable  style={productStyle.selectProduct}><Text style={productStyle.allproductText}>Latest</Text></Pressable>
            <Pressable  style={productStyle.selectProduct}><Text style={productStyle.allproductText}>Best Price</Text></Pressable>

      </View>


        <View style={productStyle.allproductView}>
          
            {value.all_products.map((product, i)=>{
                 return <ProductDisplay id={product.id} name={product.name} image={product.image} store={product.store} price={product.price} oldPrice={product.oldPrice} key={i} />
                 
            })}

        </View>


    </View>
  )
}