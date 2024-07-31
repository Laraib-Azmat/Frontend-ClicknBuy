import { View, Text } from 'react-native'
import React from 'react';
import headerStyle from './HeaderStyle';
import { MaterialIcons } from '@expo/vector-icons';

export default function MainHeader() {
  return (
    <View style={headerStyle.headerView}>
      
      <View style={headerStyle.headerIconView}>
        <MaterialIcons name="widgets" size={24} color="#F9A5AE" />
      </View>

      <Text style={headerStyle.HeaderText} >
            ClicknBuy
      </Text>

    <View style={headerStyle.headerIconView}>
    <MaterialIcons name="person" size={26} color="#F9A5AE" />
    </View>
    </View>
  )
}