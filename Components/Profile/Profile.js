import { View, Text,Image, Pressable } from 'react-native'
import React from 'react'
import ArrowIcon from '../../UI/ArrowIcon'
import profileStyle from './ProfieStyle';
import CloudLogo from '../../assets/Images/CloudLogo.png';
import Userdata from './Userdata';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from '../../UI/Button';

export default function Profile({navigation}) {



  return (
    <View style={{gap:20}}>
     
     <View  style={profileStyle.profileHeader}>     
      <Pressable onPress={()=>navigation.navigate("Home")} style={profileStyle.icon}>
        <ArrowIcon />
      </Pressable>

     <View style={profileStyle.CloudLogo}>
            <Image source={CloudLogo} style={{width:'100%', height:'100%'}} />
          </View>
     </View>

      <Userdata />

      <View style={profileStyle.oders}>
        <Text style={{fontSize:20,fontFamily:'Mogra',color:'#fff'}}>My Orders</Text>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',gap:10, width:'100%'}}>
        <Pressable style={profileStyle.orderIconView}>
        <FontAwesome5 name="money-check-alt" size={20} color="black" />
        <Text style={{fontSize:12,fontFamily:'PoppinsMedium'}}>To Pay</Text>
        </Pressable>

        

        <Pressable style={profileStyle.orderIconView}>
        <FontAwesome5 name="calendar-check" size={20} color="black" />
      <Text style={{fontSize:12,fontFamily:'PoppinsMedium'}}>To Ship</Text>
        </Pressable>


        <Pressable style={profileStyle.orderIconView}>
        <FontAwesome5 name="truck" size={20} color="black" />
        <Text style={{fontSize:12,fontFamily:'PoppinsMedium'}}>To Receive</Text>
        </Pressable>


        <Pressable style={profileStyle.orderIconView}>
        <FontAwesome5 name="comment-dots" size={20} color="black" />
        <Text style={{fontSize:12,fontFamily:'PoppinsMedium'}}>To Review</Text>
        </Pressable>
        </View>


      </View>

      <View style={{width:'100%', alignItems:'center', justifyContent:'center', gap:20}}>

        <Text style={{fontSize:20,fontFamily:'Mogra'}} >My Wallet</Text>

        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-around',width:"100%"}}>
          <View style={{alignItems:'center', justifyContent:'center', gap:10}}>
              <Text style={{fontFamily:'Mogra', color:'#D53624', fontSize:16}}>PKR</Text>
              <Text>0</Text>
          </View>

          <View style={{width:2, height:50, backgroundColor:'rgba(0,0,0,0.5)', right:-10}}></View>

          <View style={{alignItems:'center', justifyContent:'center', gap:10}}>
          <Text style={{fontFamily:'Mogra', color:'#D53624', fontSize:16}}>Vouchers</Text>
              <Text>0</Text>
          </View>
        </View>

      </View>

      <Pressable  style={{width:200, alignSelf:'flex-end',margin:30}}>
        <Button>Go to Your Store</Button>
      </Pressable>

    </View>
  )
}