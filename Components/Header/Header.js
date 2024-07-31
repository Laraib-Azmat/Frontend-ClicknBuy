import React from 'react'
import { Pressable, Text, View } from 'react-native';
import headerStyle from './HeaderStyle';
import { MaterialIcons } from '@expo/vector-icons';
import ArrowIcon from '../../UI/ArrowIcon';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {

    const navigation = useNavigation();

  const backHandler = ()=>{
    navigation.navigate("Home");
  }

  return (
    <View style={headerStyle.headerView}>
      
      <Pressable onPress={backHandler} style={[headerStyle.headerIconView, {backgroundColor:'pink'}]}>
        <ArrowIcon />
      </Pressable>

      <Text style={headerStyle.HeaderText} >
            ClicknBuy
      </Text>

    <View style={headerStyle.headerIconView}>
    <MaterialIcons name="person" size={26} color="#F9A5AE" />
    </View>


    </View>
  )
}
