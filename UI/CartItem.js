import React, { useContext, useState } from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { productContext } from '../Components/Context/Context';
import CartIcon from './CartIcon';
import { useNavigation } from '@react-navigation/native';


export const CartItem = (props) => {

  const {addToCart, removeFromCart,deleteCartItem, cartItem, toggleWishlet } =useContext(productContext);
  const navigation = useNavigation();

  const deleteItem = ()=>{
    if(props.type==='wishlet'){
      toggleWishlet(props.id);
      props.deletePrompt();
    }else{
    deleteCartItem(props.id);
    props.deletePrompt();
    }
  }

  const incrementItem = ()=>{
      addToCart(props.id);
  }

  const decrementItem = ()=>{
    if(cartItem[props.id]>1){
      removeFromCart(props.id);
    }else{
      deleteItem();
    }
  }

  const wishCartHandler = ()=>{
    addToCart(props.id);
    toggleWishlet(props.id);
  }

  return (
    <View style={{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        gap:30,
      backgroundColor:'#fff',
        padding:10,
        borderRadius:20,
        elevation:8
    }}>

           <Pressable onPress={()=>navigation.navigate("Item", {productId:props.id})}>
           <Image source={props.image} style={{width:100, height:100, borderRadius:20}} />
           </Pressable>

           <View style={{
            gap:20,
            flex:1,
            
           }}>

                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between'
                        }}>
                             <View>
                                        <Text style={{fontFamily:'PoppinsMedium', fontSize:14}}>{props.name}</Text>
                                        <Text style={{fontFamily:'PoppinsMedium', fontSize:14}}>Store:{props.store}</Text>                    
                                </View>

                                <Pressable onPress={deleteItem} style={{width:40, height:40, backgroundColor:'pink', borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                                <MaterialCommunityIcons name="delete-forever" size={28} color="#D53624" />
                                </Pressable>
                        </View>

                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between'
                        }}>
                                    <Text style={{color:'#D53624',fontFamily:'InikaBold', fontSize:16}}>RS {props.price}/-</Text>

                                    {props.type==='wishlet'?<View style={{
                                      flexDirection:'row',
                                      alignItems:'center',
                                      justifyContent:'center',
                                      gap:5

                                    }}>

                                      <Text style={{backgroundColor:'pink', padding:4, borderRadius:10}}>Buy now</Text>
                                      <Pressable onPress={wishCartHandler} style={{backgroundColor:'#D53624', borderRadius:100,width:35,height:35,alignItems:'center',justifyContent:'center'}}>
                                         <CartIcon />
                                          </Pressable>

                                    </View> : <View style={{
                                        flexDirection:'row',
                                       alignItems:'center',
                                       flex:1,
                                       justifyContent:'flex-end'

                                    }}>
                                    <TouchableOpacity onPress={decrementItem}><MaterialCommunityIcons name="minus-circle-outline" size={26} color="rgba(0,0,0,0.5)" /></TouchableOpacity>
                                        <Text style={{color:'#D53624',fontFamily:'InikaBold', fontSize:20}}>{cartItem[props.id]}</Text>
                                    <TouchableOpacity onPress={incrementItem}><MaterialCommunityIcons name="plus-circle-outline" size={26} color="rgba(0,0,0,0.5)" /></TouchableOpacity>    
                                    </View>}

                        </View>

           
           </View>

    </View>
  )
}
