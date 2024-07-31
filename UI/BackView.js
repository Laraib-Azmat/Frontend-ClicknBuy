import React from 'react'
import { View } from 'react-native'

export const BackView = (props) => {
  return (
   
    <View  style={{
        backgroundColor:'pink',
        height:620,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    }}>

{props.children}


    </View>


  )
}
