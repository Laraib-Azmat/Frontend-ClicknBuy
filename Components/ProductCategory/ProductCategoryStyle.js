import { StyleSheet } from "react-native";


const categoryStyle = StyleSheet.create({

    shortbyView:{
        flexDirection: 'row', 
        justifyContent: 'center',
         alignItems: 'center',
         gap:20,
         height:50,
         width:'100%',
       
        backgroundColor:'white'
    },
    homeSearch:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
      flex:2,

    },
    sortby:{
        flex:1.3,
       justifyContent:'center',
       alignItems:'center',
       
       
    }
});

export default categoryStyle;