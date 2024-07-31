import { View, Text, ScrollView, Image } from 'react-native'
import React, { useContext } from 'react'
import { productContext } from '../Context/Context';
import cartStyle from '../CartScreen/CartStyle';
import Button from '../../UI/Button';
import { useNavigation } from '@react-navigation/native';
import shoppingGif2 from '../../assets/Images/shoppingGif2.gif';
import all_products from '../../assets/allProducts';
import { CartItem } from '../../UI/CartItem';
import wishletStyle from './WishletStyle';

export default function Wishlet(props) {

     const {wishItem, toggleWishlet, totalWishletItem} = useContext(productContext);
     const navigation = useNavigation();

     const addItemHandler = ()=>{
      navigation.navigate("Home");
  }

  return (
   <ScrollView >

    {(totalWishletItem()>0) ? 
    <View style={wishletStyle.wishletItem}>

    <Text style={{fontFamily:'Mogra',color:'#D53624',fontSize:20}}>My Favourites</Text>

    
    {all_products.map((product, i)=>{
      if(wishItem[product.id]===true){
        return <CartItem type={'wishlet'} deletePrompt={props.deletePrompt}   id={product.id} image={product.image} name={product.name} price={product.price} store={product.store} key={i}  />
      }
    })}
    

    </View> :
         
         <View style={[cartStyle.emptyCartView, {height:400}]}>
         <Text style={{fontFamily:'Mogra', fontSize:30}}>Opss!!</Text>
         <Text style={{fontSize:16, fontFamily:'InikaRegular'}}>Your Cart on diet? Feed it some items</Text>
         <View style={cartStyle.emptyCartGif}>
           <Button onPress={addItemHandler}>Add Item</Button>
          <View style={{width:'60%', height:'50%', alignItems:'center'}}> 
            <Image source={shoppingGif2} style={{width:'60%', height:'100%', objectFit:'cover'}} /></View>
         </View>
         </View>
    }


   </ScrollView>
  )
}