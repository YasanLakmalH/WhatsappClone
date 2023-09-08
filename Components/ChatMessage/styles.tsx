import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    container:{
        padding:10,
    },
    messageBox:{
        borderRadius:5,
        padding:10,
    },
    message:{
        fontSize:18

    },
    time:{
        alignSelf:'flex-end',
        fontSize:15,
        color:'grey',

    },
    name:{
        color:Colors.light.tint,
        fontWeight:'bold',
        fontSize:20
    }
})