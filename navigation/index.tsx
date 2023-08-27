import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import { View } from 'react-native';
import { Octicons,MaterialCommunityIcons } from '@expo/vector-icons';
import BottomTabNavigator from "./MainTabNavigator";
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
        },
        headerShadowVisible:false,
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        
      }}
    >
      <Stack.Screen
        name="root"
        component={BottomTabNavigator}
        options={{
          title: "Whatsapp",
          
          headerRight:() => (
            <View style={{
                flexDirection:'row',
                width:150,
                justifyContent:'space-evenly',
            }}>
                <Feather name="camera" size={22} color="white" />
                <Octicons name='search' size={22} color={'white'} />
                <MaterialCommunityIcons name='dots-vertical' size={22} color={'white'}/>
            </View>
          )
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
export default RootNavigator;
