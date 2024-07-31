import {React, useRef, useEffect } from "react";

//Screens
import MainScreen from './Components/MainScreen/MainScreen';
import Profile from './Components/Profile/Profile';
import Contact from './Components/ContactScreen/Contact';
import Wishlet from './Components/Wishlets/Wishlet';
import Cart from './Components/CartScreen/Cart';
import Thankyou from "./Components/ThankyouScreen/Thankyou";
import ProductCategory from "./Components/ThankyouScreen/ProductCategory/ProductCategory";
import Item from "./Components/ProductItems/Item";
import CartIcon from "./UI/CartIcon";

//Dependencies
import { StyleSheet , View,Text, TouchableOpacity ,Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';


const Stack = createStackNavigator();


export default function NavigatinoScreens() {



  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="cart">
       
        <Stack.Screen name="gifts"  component={ProductCategory} />
        <Stack.Screen name="cart" component={Cart} />

    </Stack.Navigator>
   </NavigationContainer>
  )
}