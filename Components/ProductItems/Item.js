import { View, Text, SafeAreaView,Image, Pressable,  LayoutAnimation, UIManager } from 'react-native'
import React, { useContext, useState } from 'react'
import { productContext } from '../Context/Context';
import { ItemDetail } from './ItemDetail';
import ItemStyle from './ItemStyle';
import ArrowIcon from '../../UI/ArrowIcon';
import HeartIcon from '../../UI/HeartIcon';
import Button from '../../UI/Button';
import CartIcon from '../../UI/CartIcon';
import { Alert } from '../../UI/Alert';
import BottomModel from '../../UI/BottomModel';
import {  ModalContent  } from "react-native-modals";
import { AntDesign } from '@expo/vector-icons';

export default function Item({navigation, route}) {

  const [showAlert, setShowAlert] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setQuantity]= useState(1);
  const {productId}= route.params ?? null;
  const value = useContext(productContext);
  const Product = value.all_products.find((e)=>e.id == productId);


  const toggleModel = ()=>{
      setIsModalVisible(!isModalVisible);
      
  }

    const incrementQuantity = ()=>{
      setQuantity(()=>quantity+1)
   }
 
   const decrementQuantity = ()=>{
     if(quantity>1){
       setQuantity(()=>quantity-1);
     }
 
   }

    const backHandler = ()=>{
      navigation.goBack();
    }

    const addToCartHandler= ()=>{
      setShowAlert(true);
    }

    const cartPressHandler = ()=>{
       addToCartHandler();
       value.addToCart(Product.id);
    }
   const dismissAlert=()=>{
    setShowAlert(false);
   }

   const [showDeletedMessage, setShowDeletedMessage] = useState(false);

   // Enable LayoutAnimation
   UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

   
   const deletePrompt = ()=>{
     LayoutAnimation.easeInEaseOut();
     setShowDeletedMessage(true);
   setTimeout(() => {
     setShowDeletedMessage(false);
   }, 2000);
   }


  return (
    <SafeAreaView style={{flex:1, }}>


  
{showAlert && (
        <Alert showAlert={showAlert}  alert={'cart'} />
      )}

<View style={ItemStyle.itemhead}>

       
      <Pressable onPress={backHandler} dismissAlert={dismissAlert} style={ItemStyle.itemIcon}>
        <ArrowIcon/>
      </Pressable>

      {showDeletedMessage && (
                   <View style={{backgroundColor: '#D53624', padding: 10,top:30,left:"20%",position:'absolute',zIndex:500, borderRadius: 10,width:120}}>
                     <Text style={{  color: '#fff', fontFamily:'Mogra' }}>
          Item Deleted Successfully!
        </Text>
                    </View>
      )}

      <Pressable style={ItemStyle.itemIcon}>
        <HeartIcon deletePrompt={deletePrompt} pId={productId} />
      </Pressable>

    </View>

     <ItemDetail product={Product} />

     <View style={ItemStyle.itemButtonView}>

     <Pressable style={ItemStyle.cartBtn} onPress={cartPressHandler}>
      <Text style={{ fontFamily:'PoppinsMedium',fontSize:14}}>Add to cart</Text>  
      <CartIcon/>
      </Pressable>
        <Button onPress={()=>toggleModel()}>Buy now</Button>

     </View>






     <BottomModel toggleModel={toggleModel} visible={isModalVisible}>

<ModalContent style={{ width: "100%", height: 350, backgroundColor:'pink' }}>
            <View style={{
              alignItems:'center',justifyContent:'center', gap:10
            }}>
                <Text style={{fontFamily:'Mogra', fontSize:20}}>Buy now</Text>

                <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',width:'100%'}}>
                  <Image source={Product.image} style={{width:100, height:80, borderRadius:10}} />
                  <View>
                    <Text style={{fontFamily:"InriaBold", fontSize:18, color:'#D53624'}}>Rs.  {Product.price}/-</Text>
                    <Text style={{textDecorationLine:'line-through', color:'rgba(0,0, 0, 0.5)'}}>Rs. {Product.oldPrice}/-</Text>
                  </View>
                </View>
                <View style={[ItemStyle.horizontalLine, {width:'100%'}]} ></View>
                <View style={{width:'100%'}}>
                  <Text style={{fontFamily:'PoppinsMedium', fontSize:16}}>Color</Text>
                  <View style={{flexDirection:'row', gap:20}}>
                    <Text>Peach</Text>
                    <Text>Pink</Text>
                    <Text>Red</Text>
                  </View>

                
                </View>

                <View style={{flexDirection:'row',width:"100%", justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'PoppinsMedium', fontSize:16}}>Quantity</Text>
                    <View style={{flexDirection:'row', alignItems:'center', gap:5}} >
                    <Pressable onPress={decrementQuantity}><AntDesign name="minussquare" size={24} color="#D53624" /></Pressable>
                      <Text style={{fontFamily:'InikaBold', fontSize:20}}>{quantity}</Text>
                      <Pressable onPress={incrementQuantity}><AntDesign name="plussquare" size={24} color="#D53624" /></Pressable>
                    </View>
                  </View>

                  <View style={[ItemStyle.horizontalLine, {width:'100%'}]} ></View>

                 <View style={{flexDirection:'row', width:'90%', justifyContent:'space-between', alignItems:'center', margin:10}}>
                 <View style={{flexDirection:'row', gap:20}}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>Total:</Text>
                    <Text style={{fontFamily:"InikaBold", fontSize:18, color:'#D53624'}}>Rs. {Product.price*quantity}</Text>
                  </View>
                  <Button onPress={()=>{navigation.navigate("Buynow",{total:Product.price*quantity}),toggleModel()}}>Place Order</Button>
                 </View>
            </View>
        </ModalContent>
</BottomModel>

    </SafeAreaView>
  )
}