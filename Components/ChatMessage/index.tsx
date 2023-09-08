import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types/Types";
import styles from "./styles";
import moment from "moment";

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;

  const isMyMessage = () => {
    return message.user.id === 'u1';
  }

  return (
    <View style={styles.container}>
      <View 
      style={[
        styles.messageBox,{        
            backgroundColor:isMyMessage()? '#DCF8C5' : 'white',
            marginLeft:isMyMessage() ? 100:0,
            marginRight:isMyMessage() ? 0:100
        }
        ]}
        >
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={[
        styles.message
        ]}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;
