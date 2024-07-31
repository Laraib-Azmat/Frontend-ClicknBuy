import { View, Text, Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import profileStyle from './ProfieStyle';
import Makeup from '../../assets/Images/Makeup.jpg';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";

export default function Userdata() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [username, setUsername] = useState("Laraib")

    const selectImageHandler = async ()=>{

        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
                aspect: [4, 3],
              })
    
              if (!result.cancelled) {
                setSelectedImage(result.assets[0].uri);
             
              }
        }catch(error){
            Alert.alert("Error in selecting image");
        }
      }


  return (
    <View style={{flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'space-around'}}>
      
      <Pressable onPress={selectImageHandler} style={profileStyle.profilePic}>

        {selectedImage==null ? 
        <Text style={{fontSize:50,fontFamily:'Mogra', color:'#D53624'}}>{username[0]}</Text>
        :<Image source={{ uri: selectedImage }}  style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:100, }}/>}

      </Pressable>

      <View style={{gap:5}}>

        <Text style={{fontFamily:'Mogra', fontSize:18, left:-30}}>User Name</Text>
        
        <View style={profileStyle.data}>
        <Entypo name="location-pin" size={24} color="#FF8066" />
        <Text  style={{fontFamily:'InikaBold'}}>Location</Text>
        </View>
        
        <View style={profileStyle.data}>
        <Entypo name="old-phone" size={24} color="#FF8066" />
        <Text style={{fontFamily:'Jomolhar'}}>+92 3409555947</Text>
        </View>

        <Pressable style={{alignSelf:'flex-end'}}>
            <Text style={{textDecorationLine:'underline', color:'rgba(0, 0, 0, 0.6)'}}>Edit info...</Text>
        </Pressable>

      </View>

    </View>
  )
}