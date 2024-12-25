import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    SearchBar,
    Image,
    TouchableOpacity,
  } from "react-native";

const EditProfile = () => {
  return (
    <View>
      
      <Image
          source={{
            uri: "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-1084687-2071882.jpg&fm=jpg",
          }}
          style={{ width: 400, height: 200, objectFit: "contain" }}
        />
        <Text>Upload Image</Text>

        <Text>First Name</Text>
        <Text>Cat</Text>

        <Text>First Name</Text>
        <Text>Katty</Text>

        <Text>Phone</Text>
        <Text>96664865</Text>

        <Text>E-Mail</Text>
        <Text>Meyaow@msn.com</Text>

        <Text>Setting:</Text>

        <Text>Notification</Text>   <ToggleSwitch />
        <Text>Dark Mode</Text>   <ToggleSwitch />
  
    </View>
  )
}

export default EditProfile
