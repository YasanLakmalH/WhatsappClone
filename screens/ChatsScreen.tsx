import { View,Image } from 'react-native'; 
import ChatListItem from '../Components/ChatListItem';
import chatRooms from '../data/chatRooms';

const ChatsScreen = () => {    
    return(
        <View>
            <ChatListItem chatRoom={chatRooms[0]}    />
        </View>
    )
}
export default ChatsScreen; 