import React, {useState} from 'react'
import { View, LayoutAnimation, UIManager, Text } from 'react-native'
import wishletStyle from './WishletStyle'
import Button from '../../UI/Button'
import { Header } from '../Header/Header'
import Wishlet from './Wishlet';
import { BackView } from '../../UI/BackView'


export const WishletScreen = ({navigation}) => {

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

    const exploreHandler = ()=>{
        navigation.navigate("Home")
    }

  return (
    <BackView>

        <Header />

        {showDeletedMessage && (
                   <View style={{backgroundColor: '#D53624', padding: 10,top:30,left:"20%",position:'absolute',zIndex:100, borderRadius: 10,}}>
                     <Text style={{  color: '#fff', fontFamily:'Mogra' }}>
          Item Deleted Successfully!
        </Text>
                    </View>
      )}

        <Wishlet deletePrompt={deletePrompt} />

       <View style={wishletStyle.wishletBtn}>
       <Button onPress={exploreHandler}>
            Explore
        </Button>
       </View>

       </BackView>
  )
}
