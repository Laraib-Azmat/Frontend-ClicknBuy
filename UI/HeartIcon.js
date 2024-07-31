import React, { useContext, useEffect, useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';
import { Alert } from './Alert';
import { productContext } from '../Components/Context/Context';


const  HeartIcon = ({pId, deletePrompt})=> {

  
  

  const { wishItem, toggleWishlet, totalWishletItem} = useContext(productContext);

  const [heartColor, setHeartColor] = useState('#fff');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(()=>{
    if(wishItem[pId]===true){
      setHeartColor('#D53624')
    
     }else{
      setShowAlert(false)
       setHeartColor('#fff');
      
     }

  },[wishItem])
  
 

  const heartPressHandler= ()=>{

    toggleWishlet(pId);
    setShowAlert(true);

    if(wishItem[pId]===true){
      deletePrompt();
    }

  }

  const dismissAlert=()=>{
    setShowAlert(false);
   }

  return (

   <Pressable onPress={heartPressHandler}>
    
     <Octicons name="heart-fill" size={20} color={heartColor} />
    {showAlert && (<Alert showAlert={showAlert} dismissAlert={dismissAlert} alert={'wishlet'} /> )}

   </Pressable>

  
  )
}


export default HeartIcon;