import { StyleSheet } from "react-native";


const signinStyle = StyleSheet.create({

    signinView:{
            alignItems:'center',
            gap:20,
            height:500
    },

    CloudLogo:{
        width:200,
        height:100,
        
    },
    inputView:{
            alignItems:'center',
            gap:20
    },
    input:{
        backgroundColor:'#fff',
        width:250,
        padding:5,
        borderRadius:10,
        fontSize:14,
        elevation:5
    },
    dontAccount:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20
    },
    swichBtn:{
        backgroundColor:'#fff',
        padding:8,
        borderRadius:10,
        elevation:5
    },
    text:{
        fontFamily:'Mogra',
        fontSize:16
    },
    signinHeading:{
        fontSize:22,
        fontFamily:'Mogra'
    },
    passView:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    eye:{
    position:'absolute',
        right:10
    }

});

export default signinStyle;