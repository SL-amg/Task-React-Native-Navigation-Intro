import React, { useState } from "react";
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
import Toggle from "react-native-toggle-element";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const navigation = useNavigation();

  const itemData = [
    {
      id: 1,
      name: "Cat Stick",
      price: 100,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jhbj9iyx2NWLVAgMKLMdsgfMV6YFFq4yJQ&s",
      Description: "Dont buy this",
    },
    {
      id: 2,
      name: "Cat Mouse",
      price: 45,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSSBib_IdN-7jNKYPeXbkKLKW556KRvMPbg&s",
      Description: "wait for discounts",
    },
    {
      id: 3,
      name: "Cat Indor",
      price: 80,
      image: "https://m.media-amazon.com/images/I/715EiqpJ6XL.jpg",
      Description: "not good for flatfoot people",
    },
  ];

  const itemListViewCat = itemData.map((item) => (
    <View key={item.id}>
      <Text> Name: {item.name}</Text>
      <Text> price: {item.price}</Text>

      <Image
        source={{
          uri: item.image,
        }}
        style={{ width: 200, height: 100, objectFit: "contain" }}
      />
      <Text> Description: {item.Description}</Text>
    </View>
  ));

  return (
    <View>
      <View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-1084687-2071882.jpg&fm=jpg",
          }}
          style={{ width: 400, height: 200, objectFit: "contain" }}
        />
        <Text>Cat Katty</Text>
        <Text>A very rich Cat</Text>
        <Toggle
          value={toggleValue}
          onPress={(newState) => setToggleValue(newState)}
          leftTitle="Married"
          rightTitle="In Love"
        />
<Button
          title="Edit Profile"
          onPress={() => navigation.navigate("Home")}
        />

      </View>
      <Text>My itme List:</Text>
      {itemListViewCat}
    </View>
  );
};

export default Profile;
