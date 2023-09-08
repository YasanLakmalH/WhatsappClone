import React from 'react';
import { ImageBackground,FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ChatMessage from '../Components/ChatMessage';
import chatRoomData from '../data/chats';
import BG from '../assets/bg1.jpg'
const ChatRoomScreen = () => {
    const route = useRoute();

    return(
        <ImageBackground style={{width:'100%',height:'100%'}} source={BG}>
        <FlatList data={chatRoomData.messages} renderItem={({item}) => <ChatMessage message={item}/>}
        // inverted
        />
        </ImageBackground>
        
    )
}
export default ChatRoomScreen;
