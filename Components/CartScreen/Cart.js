import React, {useState} from 'react'
import { Header } from '../Header/Header'
import { CartView } from './CartView';
import { View, Text, LayoutAnimation, UIManager } from 'react-native';

export default function Cart() {

  const [showDeletedMessage, setShowDeletedMessage] = useState(false);

    // Enable LayoutAnimation
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    
    const deletePrompt = ()=>{
      LayoutAnimation.easeInEaseOut();
      setShowDeletedMessage(true);
    setTimeout(() => {
      setShowDeletedMessage(false);
    }, 9000);
    }
    

  return (
    <View >
     <Header />

     {showDeletedMessage && (
                   <View style={{backgroundColor: '#D53624', padding: 10,top:30,left:"20%",position:'absolute',zIndex:100, borderRadius: 10,}}>
                     <Text style={{  color: '#fff', fontFamily:'Mogra' }}>
          Item Deleted Successfully!
        </Text>
                    </View>
      )}

     <CartView  deletePrompt={deletePrompt} />
    </View>
  )
}