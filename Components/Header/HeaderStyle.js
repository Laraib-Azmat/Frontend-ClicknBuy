import { StyleSheet } from "react-native";


const headerStyle  = StyleSheet.create({
    headerView:{
        height:100,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20
    },
    headerIconView:{
        width:40,
        height:40,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        elevation: 5, // For Android elevation
        shadowColor: 'black', // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        padding:5
    },
    HeaderText:{
    
        fontSize:28,
        fontFamily:'Neon',
        elevation:5,
        textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color with opacity
        textShadowOffset: { width: 0, height: 2 }, // Shadow offset
        textShadowRadius: 4, // Shadow radius
    }
});

export default headerStyle;