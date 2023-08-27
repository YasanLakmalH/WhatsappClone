import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Community from "../screens/Community";
import Chats from "../screens/Chats";
import Status from "../screens/Status";
import Calls from "../screens/Calls";
import Colors from "../constants/Colors";
import { MainTabParamsList } from "../types/Types";
import { Ionicons } from '@expo/vector-icons';

const MainTab = createMaterialTopTabNavigator<MainTabParamsList>();

export default function MainTabNavigator() {
  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
        tabBarIndicatorStyle:{
          backgroundColor:'white',
          height:4
        },
        tabBarLabelStyle:{
          fontStyle:'normal',
          textTransform:'none'
        },
        tabBarShowIcon:true,
        
      }}
    >
      <MainTab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon:() => <Ionicons name="people" size={24} color="white" />,
          tabBarLabel:() => null
        }}
      ></MainTab.Screen>
      <MainTab.Screen
        name="Chats"
        component={Chats}
        options={{
          title: "Chats",
          
        }}
      ></MainTab.Screen>
      <MainTab.Screen
        name="Status"
        component={Status}
        options={{
          title: "Status",
        }}
      />
      <MainTab.Screen name="Calls" component={Calls} />
    </MainTab.Navigator>
  );
}
