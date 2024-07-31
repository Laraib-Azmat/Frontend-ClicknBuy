import { StyleSheet } from "react-native";

const productStyle = StyleSheet.create({

    selectProduct:{
        backgroundColor:'#E7E8EC',
        elevation:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:75,
        padding:5,
        

    },
    allproductText:{
        fontSize:12,
        fontFamily:'PoppinsMedium'
    },

    allproductView:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:20,
        alignItems:'center',
        justifyContent:'center'
    }

});

export default productStyle;