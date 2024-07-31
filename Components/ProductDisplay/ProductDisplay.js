import { View, Text, Image, Pressable, LayoutAnimation, UIManager } from 'react-native'
import React, {useState} from 'react';
import productDisplayStyle from './ProductDisplayStyle';
import HeartIcon from '../../UI/HeartIcon';
import { useNavigation } from '@react-navigation/native';

export default function ProductDisplay(props) {

 const navigation = useNavigation();

    const productDisplayHandler = ()=>{
            navigation.navigate("Item" , {productId:props.id})
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
    <View style={{gap:10,}}>
      
       <Pressable onPress={productDisplayHandler} style={productDisplayStyle.displayImage}>
            <Image source={props.image} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:30}}  />
            
            {showDeletedMessage && (
                   <View style={{backgroundColor: '#D53624', padding: 10,top:30,left:"20%",position:'absolute',zIndex:500, borderRadius: 10,width:120}}>
                     <Text style={{  color: '#fff', fontFamily:'Mogra' }}>
          Item Deleted Successfully!
        </Text>
                    </View>
      )}

       </Pressable>

       <View  style={productDisplayStyle.displayDesc}>

        <View style={productDisplayStyle.displayLeft}>

            <Text style={productDisplayStyle.productName}>{props.name}</Text>
            <Text style={{fontSize:12, fontFamily:'PoppinsRegular'}}>Store: {props.store}</Text>                          
        
        </View>

        <View style={productDisplayStyle.displayRight}>

            <HeartIcon pId={props.id} deletePrompt={deletePrompt} />
        </View>
       </View>

       <View style={{flexDirection:'row',gap:10}}>
       <Text style={productDisplayStyle.price}>RS {props.price}/-</Text>
                <Text style={productDisplayStyle.oldPrice}>RS {props.oldPrice}/-</Text>
       </View>

    </View>
  )
}