import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({  
    container:{
        width:"100%",
        flexDirection:"row",
        padding:10,
        justifyContent:"space-between"
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:100,
        marginRight:10
    },
    leftContainer:{
        flexDirection:"row"
    },    
    midContainer:{
        justifyContent:"center",
    },
    userName:{
        fontWeight:"bold",
        fontSize:20
    },
    lastMessage:{
        fontSize:16,
        color:"grey"
    },  
    time:{
        fontSize:16,
        color:'grey'
    }

});
export default styles;