import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Button from '../../UI/Button';
import cartStyle from './CartStyle';
import { productContext } from '../Context/Context';
import { useNavigation } from '@react-navigation/native';

export const CartPayment = () => {

    const {totalCartAmount, totalCartItem} = useContext(productContext);
    const navigation = useNavigation();
    const [discount , setDiscount] = useState(0);

   useEffect(()=>{
    if(totalCartAmount()>1000){
        const temp = totalCartAmount() * 0.1;
        setDiscount(temp)
    }else{
        setDiscount(0);
    }
   },[totalCartAmount()])

  return (
    <View style={cartStyle.CartPaymentView}>

                    <View style={{gap:10, width:"100%", alignItems:'center'}}>
                    <Text style={cartStyle.text}>Payment Details</Text>                  
                    <View style={cartStyle.dashedLine} />
                    </View>

            <View style={{gap:10}}>

                <View style={cartStyle.paymentList}>
                    <Text style={cartStyle.paymentText}>Total no. of items:</Text>
                    <Text style={cartStyle.paymentNumber}>{totalCartItem()}/-</Text>
                </View>

                <View style={cartStyle.paymentList}>
                    <Text style={cartStyle.paymentText}>Total Payment:</Text>
                    <Text style={cartStyle.paymentNumber}>{totalCartAmount()}/-</Text>
                </View>

                <View style={cartStyle.paymentList}>
                    <Text style={cartStyle.paymentText}>Discount:</Text>
                    <Text style={cartStyle.paymentNumber}>{discount}/-</Text>
                </View>

                <View style={cartStyle.paymentTotal}>
                    {totalCartAmount()>0 && (<Button onPress={()=>{navigation.navigate("Buynow",  {total:totalCartAmount()-discount})}} >Pay now</Button>)}
                    <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
                        <Text style={{fontFamily:'InikaBold', fontSize:18}}>Total:</Text>
                        <View style={cartStyle.totalAmount}><Text style={cartStyle.paymentNumber}>{totalCartAmount()-discount}/-</Text></View>
                    </View>
                </View>
            </View>

         </View>
  )
}
