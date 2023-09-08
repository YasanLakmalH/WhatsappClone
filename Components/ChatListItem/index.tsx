import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types/Types";
import styles from "./styles";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('ChatRoom',
    {
      id:chatRoom.id,
      name:chatRoom.users[1].name,
      imageUri:chatRoom.users[1].imageUri,
    });
  }
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: chatRoom.users[1].imageUri }}
            style={styles.avatar}
          />  
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{chatRoom.users[1].name}</Text>
            <Text style={styles.lastMessage}>
              {chatRoom.lastMessage.content.length > 20
                ? `${chatRoom.lastMessage.content.slice(0, 20)}...`
                : `${chatRoom.lastMessage.content}`}
            </Text>
          </View>
        </View>

        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt)
            .subtract(1, "days")
            .calendar()}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
