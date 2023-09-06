import { View, FlatList } from "react-native";
import ChatListItem from "../Components/ChatListItem";
import chatRooms from "../data/chatRooms";

const ChatsScreen = () => {
  return (
    <View>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default ChatsScreen;
