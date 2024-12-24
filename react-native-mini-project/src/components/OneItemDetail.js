import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  SearchBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OneItemDetail = ({ route }) => {
  const { name, price, image, Description, image2 } = route.params;
  const navigation = useNavigation();
  return (
    <View>
      <Text>Item Detail is</Text>
      <Text>Name: {name}</Text>
      <Text>price: {price}</Text>
      <Image
        source={{
          uri: image2,
        }}
        style={{ width: 400, height: 200, objectFit: "contain" }}
      />
      <Text>Details {Description}</Text>
    </View>
  );
};

export default OneItemDetail;
