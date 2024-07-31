import React, { useContext } from 'react'
import { ScrollView, Text } from 'react-native'
import { productContext } from '../Context/Context'
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import { View } from 'react-native-animatable';

export const CategoryProductImages = (props) => {

    const {all_products} = useContext(productContext);


  return (
   <ScrollView  >

    <View  style={{
         flexDirection:'row',
         flexWrap:'wrap',
         gap:20,
         alignItems:'center',
         justifyContent:'center',
    }}>

      {all_products.map((product, i)=>{

        if(product.category==props.name){
           return <ProductDisplay id={product.id} name={product.name} image={product.image} store={product.store} price={product.price} oldPrice={product.oldPrice} key={i} />
        }
      })}

      
    </View>
 

   </ScrollView>
  )
}
