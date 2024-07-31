import { StyleSheet } from "react-native";


const profileStyle = StyleSheet.create({

    CloudLogo:{
            width:200,
            height:100,
    },
    profileHeader:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        justifyContent:'space-between',
      
    },
    icon:{
        backgroundColor:'#F9A5AE',
        width:50,
        height:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
       marginLeft:20
    },
    profilePic:{
        width:150,
        height:150,
        borderRadius:100,
        elevation:5,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    data:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:3
    },
    oders:{
        backgroundColor:'#F9A5AE',
        alignItems:'center',
        justifyContent:'center',
        gap:20,
        padding:20    
    },
    orderIconView:{
        backgroundColor:'#fff',
        width:70,
        height:70,
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        borderRadius:10,
        elevation:5,
        
    }

});

export default profileStyle;