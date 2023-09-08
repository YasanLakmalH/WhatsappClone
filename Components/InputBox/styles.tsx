import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        marginHorizontal:10
    },
    subContainer:{
        flexDirection:'row',
        padding:10,
        backgroundColor:Colors.light.background,
        borderRadius:20,
        marginRight:10,
        flex:1
    },
    buttonContainer:{
        padding:10,
        borderRadius:100,
        backgroundColor:Colors.light.tint,
    
    },
    textInput:{
        flex:1
    }
})
