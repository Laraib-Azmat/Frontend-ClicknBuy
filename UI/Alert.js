import React, { useEffect, useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Alert = ({showAlert,dismissAlert, alert}) => {

  const [showalert, setShowalert] = useState(showAlert)

    const navigation = useNavigation();

    const CheckIcon = () => (
        <MaterialCommunityIcons name="check-decagram" size={34} color="#D53619" />
      );

  const navigateHandler = ()=>{
    if(alert==='cart'){
        navigation.navigate("Cart");
      
    }else{
        navigation.navigate("Wishlet");
       
    }
  }

  useEffect(()=>{
    if(showalert===false){
      dismissAlert;
    }
  },[showAlert,showalert])



  return (
    <AwesomeAlert show={showalert} title={`Item  added to the ${alert==='cart'? 'cart':'wishlet'}!!!` }
    message={<CheckIcon />}
     titleStyle={{fontFamily:'InikaBold'}}
     showCancelButton={true}
     cancelText='continue shopping'
     cancelButtonStyle={{backgroundColor:'green', height:40 }}
     cancelButtonTextStyle={{color:'white', fontFamily:'Mogra', fontSize:16}}
     onCancelPressed={()=>{setShowalert(false), navigation.navigate("Home")}}

     showConfirmButton={true}
     confirmText={`View ${alert==='cart'? 'Cart':'Wishlet'}`}
     confirmButtonTextStyle={{fontFamily:'Mogra', color:'white', marginTop:4 }}
     confirmButtonStyle={{backgroundColor:'#D53624', height:40,  }}
     onConfirmPressed={navigateHandler}
   
     // closeOnTouchOutside={false}
     // closeOnHardwareBackPress={false}

     onDismiss={()=>{setShowalert(false),navigation.navigate("Home")}}
     />
  )
}
