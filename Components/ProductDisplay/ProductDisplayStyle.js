import { StyleSheet } from "react-native";

const productDisplayStyle = StyleSheet.create({

    displayImage:{
        width:150,
        height:200,
        borderRadius:30
    },
    displayDesc:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20
    },
    price:{
        fontFamily:'InriaBold',
        fontSize:16,
        color:'#D53624'
    },
    oldPrice:{
        textDecorationLine:'line-through',
        fontSize:12,
        fontFamily:'Jomolhar',
        color:'rgba(0, 0, 0, 0.5)'
    },
    displayRight:{
        width:35,
        height:35,
        borderRadius:50,
        backgroundColor:'#FFD1D1',
        alignItems:'center',
        justifyContent:'center'
    },
    productName:{
        fontFamily:'PoppinsMedium',
        fontSize:14
    },
    displayLeft:{
        flex:1
    }

});

export default productDisplayStyle;