import React, {useState} from 'react';
import { View, Text, Pressable} from 'react-native';
import cashDelivery from '../../assets/Images/cashDelivery.png'
import bankTransfer from '../../assets/Images/bankTransfer.png'
import Wallet from '../../assets/Images/Wallet.png'
import { Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export const BuyCheckBox = () => {

    const [cash, setCash] = useState(false);
    const [bank, setBank] = useState(true);
    const [other, setOther] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModel = (show)=>{
        setIsModalVisible(show)
    }


  const handleCash = () => {
    setCash(true);
    setBank(false);
    setOther(false);
  }
  const handleBank = () => {
    setCash(false);
    setBank(true);
    setOther(false);
  }
  const handleOther = () => {
    setCash(false);
    setBank(false);
    setOther(true);
  }

  return (
    <View style={{alignItems:'center', justifyContent:'center', gap:20, backgroundColor:'#F9A5AE', width:'100%', paddingVertical:20}}>
    <Text style={{fontFamily:'PoppinsMedium', fontSize:18}}>Payment Method</Text>

    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'80%'}}>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
        <Image source={cashDelivery} style={{width:30, height:30}} />
            <Text>Cash on Delivery</Text>
        </View>
        <Pressable onPress={handleCash} style={{width:25,height:25,backgroundColor:'#fff'}}>

            {cash && (
                    <Entypo name="check" size={24} color="#D53624" />
            )}

        </Pressable>
    </View>

    

    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'80%'}}>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
            <Image source={bankTransfer} style={{width:30 ,height:30}} />
            <Text>Bank Transfer</Text>
        </View>
        <Pressable onPress={handleBank} style={{width:25,height:25,backgroundColor:'#fff'}}>

        {bank && (
                    <Entypo name="check" size={24} color="#D53624" />
            )}

        </Pressable>
    </View>

    

    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'80%'}}>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
        <Image source={Wallet} style={{width:30, height:30}} />
            <Text>Other Wallets</Text>
        </View>
        <Pressable onPress={handleOther} style={{width:25,height:25,backgroundColor:'#fff'}}>

        {other && (
                    <Entypo name="check" size={24} color="#D53624" />
            )}

        </Pressable>
    </View>

    
</View>
  )
}
