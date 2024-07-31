import React, { useContext, useState } from 'react'
import { Image, ScrollView , Text, View, } from 'react-native'
import cartStyle from './CartStyle'
import { productContext } from '../Context/Context'
import { CartItem } from '../../UI/CartItem'
import { CartPayment } from './CartPayment'
import Button from '../../UI/Button';
import shoppingGif from '../../assets/Images/shoppingGif.gif';
import { useNavigation } from '@react-navigation/native'

export const CartView = (props) => {

    const navigation = useNavigation();
    const {all_products,  cartItem, totalCartItem} = useContext(productContext);

    const addItemHandler = ()=>{
        navigation.navigate("Home");
    }

  return (
    <ScrollView style={{backgroundColor:'#fff'}}>

            <View style={cartStyle.cartView}  >

            <Text style={cartStyle.cartHeading}>Your Cart</Text>

           {(totalCartItem()>0) ?  <View style={{gap:25, alignItems:'center'}} >
        
        
        {all_products.map((product, i)=>{
          
            if(cartItem[product.id]>0){
                return <CartItem deletePrompt={props.deletePrompt}   id={product.id} image={product.image} name={product.name} price={product.price} store={product.store} key={i}  />
            }
        })}

        </View> :

        <View style={cartStyle.emptyCartView}>
          <Text style={{fontFamily:'Mogra', fontSize:30}}>Opss!!</Text>
          <Text style={{fontSize:16, fontFamily:'InikaRegular'}}>Your Cart on diet? Feed it some items</Text>
          <View style={cartStyle.emptyCartGif}>
            <Button onPress={addItemHandler}>Add Item</Button>
           <View style={{width:'60%', height:'60%', alignItems:'center'}}> 
             <Image source={shoppingGif} style={{width:'60%', height:'100%', objectFit:'cover'}} /></View>
          </View>
          </View>
}
           

            <CartPayment  />


            </View>


    </ScrollView>
  )
}
