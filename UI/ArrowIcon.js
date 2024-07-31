import React from 'react';
import {  Image } from 'react-native';
import arrow from '../assets/Images/back.png';


export default function ArrowIcon() {
  return (
   
    <Image source={arrow} style={{width:'50%', height:'50%', objectFit:'contain'}} />
 
  )
}
