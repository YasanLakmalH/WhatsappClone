import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CommunityScreen from "../screens/CommunityScreen";
import ChatsScreen from "../screens/ChatsScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";
import Colors from "../constants/Colors";
import { MainTabParamsList } from "../types/Types";
import { Ionicons } from '@expo/vector-icons';

const MainTab = createMaterialTopTabNavigator<MainTabParamsList>();

export default function MainTabNavigator() {
  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor:Colors.light.tabIconSelected,
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
        tabBarIndicatorStyle:{
          backgroundColor:Colors.light.tabIconSelected,
          height:4
        },
        tabBarLabelStyle:{
          fontStyle:'normal',
          textTransform:'none',
        },
        tabBarShowIcon:true,
        
      }}
    >
      <MainTab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon:() => <Ionicons name="people" size={24} color="white" />,
          tabBarLabel:() => null,
          
        }}
      ></MainTab.Screen>
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: "Chats",
        }}
      ></MainTab.Screen>
      <MainTab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: "Status",
        }}
      />
      <MainTab.Screen name="Calls" component={CallsScreen} />
    </MainTab.Navigator>
  );
}
