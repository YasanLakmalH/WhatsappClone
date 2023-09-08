import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Fontisto, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

const InputBox = () => {
  const [message, setMessage] = useState("");
  const onMicrophonePress = () => {
    console.warn('Microphone');

  }
  const onSendPress = () => {
    console.warn(`Sending :${message}`);
    // send the message to backend

    setMessage('');
  }
  const onPress = () => {
    if(!message){
        onMicrophonePress();

    }else{
        onSendPress();
    }
  }    
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Fontisto
          name="smiley"
          size={24}
          color="grey"
          style={{ marginRight: 10 }}
        />
        <TextInput
          placeholder="Message"
          style={styles.textInput}
          onChangeText={setMessage}
          value={message}
          multiline
        />
        <Entypo
          name="attachment"
          size={24}
          color="grey"
          style={{ transform: [{ rotate: "90deg" }], marginRight: 10 }}
        />
        {!message && <Ionicons name="md-camera" size={24} color="grey" />}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {message ? (
            <MaterialIcons name="send" size={30} color="white" />
          ) : (
            <Ionicons name="mic" size={30} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default InputBox;
