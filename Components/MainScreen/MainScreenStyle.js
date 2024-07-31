import { StyleSheet } from "react-native";


const mainStyle = StyleSheet.create({
    mainSearchView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20
    },
   
    mainSearch:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
       elevation:5,
       shadowColor: 'black', // For iOS shadow
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.2,
       shadowRadius: 4,
       borderRadius:5,
       padding:5,
       width:'65%'
    },
    offerView:{
        width:300,
        height:150,
        backgroundColor:'#F9A5AE',
        borderRadius:30,
        flexDirection:'row',
        
    },
    offerLeft:{
        height:'100%',
        top:-30,
        left:-20,
        
    },
    offerRight:{        
      left:-13,
      height:50,
      top:20,
      width:'100%'
    }
});

export default mainStyle;