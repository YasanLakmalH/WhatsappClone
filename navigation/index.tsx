import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import { View, Image, Text } from "react-native";
import {
  Octicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import NotFoundScreen from "../screens/NotFoundScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import MainTabNavigator from "./MainTabNavigator";
import { useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();
  const onClickBack = () => navigation.goBack();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
        },
        headerShadowVisible: false,
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="root"
        component={MainTabNavigator}
        options={{
          title: "Whatsapp",

          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 150,
                justifyContent: "space-evenly",
              }}
            >
              <SimpleLineIcons
                name="camera"
                size={22}
                color={Colors.light.background}
              />
              <Octicons
                name="search"
                size={22}
                color={Colors.light.background}
              />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={Colors.light.background}
              />
            </View>
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: false,
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                marginLeft:8
              }}
            >
              <Ionicons
                name="arrow-back"
                size={22}
                color={Colors.light.background}
                style={{ marginTop: 10 , marginRight:2}}
                onPress={onClickBack}
              />
              <Image
                source={{ uri: route.params.imageUri }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    color: Colors.light.background,
                  }}
                >
                  {route.params.name}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.light.background,
                  }}
                >
                  last seen recently
                </Text>
              </View>
            </View>
          ),

          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 150,
                justifyContent: "space-evenly",
              }}
            >
              <FontAwesome5
                name="video"
                size={22}
                color={Colors.light.background}
              />
              <MaterialIcons
                name="call"
                size={22}
                color={Colors.light.background}
              />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={Colors.light.background}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "oops" }}
      />
    </Stack.Navigator>
  );
}
export default RootNavigator;
