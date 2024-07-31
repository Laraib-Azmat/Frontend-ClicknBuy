import React, { useRef } from 'react';
import { Pressable, TextInput, View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import mainStyle from './MainScreenStyle';
import offerImg from '../../assets/Images/offerImage.png'


export default function MainSearch() {
 

  return (
   
     <View style={{alignItems:'center', justifyContent:'center', gap:30}}>

<View style={mainStyle.mainSearchView}>
       
        <Pressable style={mainStyle.mainSearch}>
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder="Search for your Product..." />
        </Pressable>
       
        <View><Feather name="mic" size={24} color="#F9A5AE" /></View>
        </View>

        <View style={mainStyle.offerView}>
            <View style={mainStyle.offerLeft}>
                    <Image source={offerImg} style={{width:200, height:185}} />
            </View>

            <View style={mainStyle.offerRight}>
                <Text style={{fontFamily:'InikaRegular', fontSize:22}}>SALE</Text>
                <Text style={{fontFamily:'Jomolhar', fontSize:38, left:6}}>40%</Text>
                <Text style={{fontFamily:'Jomolhar', fontSize:16,left:8}}>Big Discount</Text>
            </View>
        </View>

     </View>

    
  );
}


