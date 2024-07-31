import { StyleSheet } from "react-native";


const cartStyle = StyleSheet.create({

    
    cartView:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
        marginBottom:180,
        gap:20
    },

    cartHeading:{
        fontSize:24,
        fontFamily:'Mogra',
        color:"#D53624"
    },
    CartPaymentView:{
        width:'100%',
        backgroundColor:'#F9A5AE',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        paddingVertical:10
    },
    text:{
        fontSize:16,
        fontFamily:'InikaBold'
    },
    dashedLine:{
        width: '40%',
        borderBottomWidth: 1.2,
        borderBottomColor: 'black',
        borderStyle: 'dashed',
    
    },
    paymentList:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:40
     
    },
    paymentTotal:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20
    },
    totalAmount:{
        backgroundColor:'#fff',
       borderRadius:5,
       padding:5
    },
    paymentNumber:{
        fontFamily:'InriaBold',
        fontSize:16
    },
    paymentText:{
        fontFamily:'PoppinsRegular'
    },
    emptyCartGif:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:'50%',
        width:'100%'
    },
    emptyCartView:{
        alignItems:'center',
        justifyContent:'center',
        gap:10
    }

});

export default cartStyle;