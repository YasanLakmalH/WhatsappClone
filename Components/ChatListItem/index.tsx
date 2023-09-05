import React from 'react';
import { View, Text, Image } from 'react-native';
import { ChatRoom } from '../../types/Types'
import styles from './styles';

export type ChatListItemProps = {
    chatRoom:ChatRoom;
}
const ChatListItem = (props:ChatListItemProps) => {
    const { chatRoom } = props
    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{uri:chatRoom.users[1].imageUri}} style={styles.avatar}/>
            <View style={styles.midContainer}>
                <Text style={styles.userName}>{chatRoom.users[1].name}</Text> 
                <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>
            </View>
           
            <Text style={styles.time}>Yesterday</Text>
        </View>
    )
};

export default ChatListItem;
