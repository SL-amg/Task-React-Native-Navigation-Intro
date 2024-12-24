import React from 'react'
import { Button, StyleSheet, Text, View, TextInput, SearchBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OneItemDetail = ({route}) => {
    const {name, price, image, Description, image2} = route.params
    const navigation = useNavigation();
  return (
    <View>
        <Text>Item Detail is</Text>
        <Text>Name: {name}</Text>
        <Text>price: {price}</Text>
        <Image
        source={image2}
        style={{width:300,height:200, }}/>
        <Text>Details {Description}</Text>
    </View>
  )
}

export default OneItemDetail
