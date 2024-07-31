import React from 'react'
import { Pressable, Text } from 'react-native';
import btnStyle from './ButtonStyle';

export default function Button(props) {
  return (
    <Pressable onPress={props.onPress} style={btnStyle.btn}>
        <Text style={{color:'#FFFFFF', fontFamily:'Mogra', fontSize:16}}>{props.children}</Text>
    </Pressable>
  )
}
