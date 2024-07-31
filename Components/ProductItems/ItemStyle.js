import { StyleSheet } from "react-native";


const ItemStyle = StyleSheet.create({

    itemIcon:{
        width:50,
        height:50,
        backgroundColor:'#F9A5AE',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',

    },
    itemhead:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        height:100,
        position:'absolute',
        top:0,
        zIndex:20,
        width:'100%',
        gap:150

    },
    itemButtonView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:50,
        marginBottom:30
    },
    cartBtn:{
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F9A5AE',
        padding:10,
        borderRadius:20,
        elevation:5
    },
    itemDetailImg:{
        backgroundColor:'#F9A5AE',
        height:350,
       borderBottomLeftRadius:50,
       borderBottomRightRadius:50,
       alignItems:'center',
       justifyContent:'center',
    },
    detailView:{
         alignItems:'center',
         justifyContent:'center',
         gap:30,
         margin:20
    },
    itemHeading:{
        fontFamily:'Mogra',
        fontSize:30
    },
    descView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:30
    },
    descRight:{
        flex:1,

    },
    lineView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },
    horizontalLine:{
        height:2,
        width:100,
        backgroundColor:'rgba(0,0,0,0.3)'
    },
    feature:{
        alignItems:'center',
        justifyContent:'center'
    }

});

export default ItemStyle;