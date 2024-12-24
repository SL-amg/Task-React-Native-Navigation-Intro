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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ItemList = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      name: "adidas Yeezy",
      price: 100,
      image:
        "https://media.blackandwhite-ff.com/10000/10b5fe42-a071-497d-9535-296f3e5f9ebe_tophero.jpg",
      image2:
        "https://images-cdn.ubuy.co.in/653903439c013579ee704594-adidas-mens-yeezy-boost-350-v2.jpg",
      Description: "Dont buy this",
    },
    {
      id: 2,
      name: "adidas NMD",
      price: 45,
      image:
        "https://www.shutterstock.com/image-photo/bangkok-thailand-june-162016-adidas-600nw-437671855.jpg",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-WYHhl713cllUVCoGQKHK95SMMHfQfcQ-A&s",
      Description: "wait for discounts",
    },
    {
      id: 3,
      name: "adidas UltraBoost",
      price: 80,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCT8ZjiYUIm7-nhuSDzeQBeH6qrHm2yBQkw&s",
      image2:
        "https://preview.redd.it/first-official-look-at-the-ultraboost-24-v0-0lpsfpq1w0xc1.jpeg?width=640&crop=smart&auto=webp&s=5de66b66214f1e937dc96aa069d361a540ef3853",
      Description: "not good for flatfoot people",
    },
  ];

  const itemListView = data.map((item) => (
    <View key={item.id}>
      <TouchableOpacity
        onPress={() => navigation.navigate("OneItemDetail", item)}
      >
        <Text>This item is</Text>
        <Text> Name: {item.name}</Text>
        {/* <Text> price: {item.price} KD</Text> */}

        <Image
          source={{
            uri: item.image,
          }}
          style={{ width: 200, height: 100, objectFit: "contain" }}
        />
      </TouchableOpacity>
    </View>
  ));
  return (
    <View>
      <Text>This is a page of one item detail</Text>
      <Text>List of items</Text>
      {itemListView}
    </View>
  );
};

export default ItemList;
