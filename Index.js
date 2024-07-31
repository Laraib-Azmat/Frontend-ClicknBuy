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
import { StyleSheet , View, TouchableOpacity ,Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


//Object that contain all the information related to screen that we  are going to make. 
const TabsArray = [
    {name:'Profile', component:Profile, icon:'log-in-outline'},
    {name:'Contact', component:Contact, icon:'document-text'},
    {name:'Home', component:MainScreen, icon:'home-outline'},
    {name:'Wishlet', component:Wishlet, icon:'heart'},
    {name:'Cart', component:Cart, icon:'cart-outline'}
  ];
  
  //animations for bottom tab
  const animate1 = {0:{scale:0.5, translateY:7},.92:{translateY:-34} ,1:{scale:1.2,  translateY:-15}};
  const animate2 = {0:{scale:1.2, translateY:-15}, 1:{scale:1, translateY:7}};
  const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 1: { scale: 1 } }
  const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }
  
  //Bottom Tab icons in form of button to add more styling
  const TabButton = (props)=>{
  
    //retrieving data from props
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
  
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);
  
    //adding animation and styling to the selected icon
    useEffect(()=>{
      if(focused){
        viewRef.current.animate(animate1);
        circleRef.current.animate(circle1);
        textRef.current.transitionTo({ scale: 1 });
      }
      else{
        viewRef.current.animate(animate2);
        circleRef.current.animate(circle2);
        textRef.current.transitionTo({ scale: 0 });
     
      }
    } , [focused])
  
    return(
      <TouchableOpacity onPress={onPress} style={styles.TabView}>
      <Animatable.View 
      style={styles.TabView}
      ref={viewRef}
      duration={1000}>
         <View style={[styles.btn, { borderColor: '#F9A5AE', backgroundColor: 'white' }]}>
            <Animatable.View
              ref={circleRef}
              style={styles.circle} />
      <Ionicons name={item.icon} style={ focused? styles.focusedd: styles.notfocusedd} />
      </View> 
          <Animatable.Text
            ref={textRef}
            style={styles.text}>
            {item.name} 
          </Animatable.Text>
        </Animatable.View>
     
      </TouchableOpacity>
    )
  }

  const HomeStack = () => {


    return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      tabBarShowLabel: false, tabBarStyle: styles.tabBar ,
      headerShown: false
    }}>
      {
        //function that go to all the items of object and make screens for all
        TabsArray.map((item, index)=>{
          return(
              <Tab.Screen key={index} name={item.name} component={item.component} 
              options={{ tabBarButton: (props)=> <TabButton {...props} item={item} />}} />)
        })
      }
    </Tab.Navigator>
    )}


export const Index = () => {
 
  const headerLeft = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('./assets/Images/back.png')} // Add your back icon image
        style={{ width: 24, height: 24, marginLeft: 16 }} // Adjust styles as needed
      />
    </TouchableOpacity>
  );

  const headerRight = () => (
    <TouchableOpacity style={{marginRight:20}} > 
      <CartIcon/>
    </TouchableOpacity>
  );


    return (
   
        <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#F9A5AE', 
        }, headerTitleAlign: 'center',
        headerTitleStyle: {
        //   fontFamily: 'Mogra',
        },headerLeft: headerLeft,
      
        headerRight:headerRight
      }} 
       >
      <Stack.Screen name="first" component={HomeStack} options={{headerShown: false}} />
      <Stack.Screen name="Item" component={Item} options={{headerShown: false}} />
      <Stack.Screen name='HouseHold' component={ProductCategory} />
      <Stack.Screen name='Crockery' component={ProductCategory} />
      <Stack.Screen name='Gifts' component={ProductCategory}  />
      <Stack.Screen name='Jewellery' component={ProductCategory}  />
      <Stack.Screen name='Sports' component={ProductCategory} />
      <Stack.Screen name='Toys' component={ProductCategory}  />
      <Stack.Screen name='Fashion' component={ProductCategory}  />
      <Stack.Screen name='Thankyou' component={Thankyou}  options={{headerShown:false}} />
    
    </Stack.Navigator>
      
    );
  };

 

  const styles = StyleSheet.create({
    TabView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:60,
        
      
    },
    tabBar: {
      height: 60,
      position: 'absolute',
      marginHorizontal: 15,
      marginBottom:10,
      borderRadius: 16,
      backgroundColor:'#F9A5AE',
     
    },
   btn:{
    width:50,
    height:50,
    borderRadius:25,
    borderWidth:4,
    justifyContent:'center',
    alignItems:'center',
   },
   circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF8066',
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#4f224f',
    fontWeight: '500'
  },
  focusedd:{
  color:'white',
   fontSize:15,
  },
  notfocusedd:{
    fontSize:20,
    fontWeight:900,
    color:'#F9A5AE',
  }
  
  });