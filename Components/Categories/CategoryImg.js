import React from 'react'
import { View ,Text, Image, Pressable} from 'react-native'
import categoryStyle from './CategoryStyle';
import { useNavigation } from '@react-navigation/native';



export default function CategoryImg(props) {
 
    
    const navigation = useNavigation();

  const catergoryNavigate =()=>{
      navigation.navigate("CategoryProduct",{name:props.name})
  }

  return (
   <Pressable onPress={catergoryNavigate} style={categoryStyle.categoryPressable}>
    <Image source={props.image} style={categoryStyle.categoryimg} />
    <Text style={{fontFamily:'PoppinsRegular', fontSize:12}} >{props.name}</Text>
   </Pressable>
  )
}