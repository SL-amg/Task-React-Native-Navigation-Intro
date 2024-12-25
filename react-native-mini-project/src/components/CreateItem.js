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

const CreateItem = () => {

  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPriceValue, setInputPriceValue] = useState("");
  const [inputDescValue, setInputDescValue] = useState("");

  return (
    <View>
      <Text>Create a new Item</Text>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8vWudlY8BVzgLbMW4ZgbMsfRb8xX76GATw&s"
        }}
        style={{ width: 400, height: 200, objectFit: "contain" }}
      />
    <Text>Name:</Text>
      <TextInput
        style={styles.inputField}
        value={inputNameValue}
        onChangeText={(text) => setInputNameValue(text)} // Handles text chang 
        placeholder="Enter Name"
      />
      <Text>You typed: {inputNameValue}</Text>
      <Text>Price:</Text>
      <TextInput
        style={styles.inputField}
        value={inputPriceValue}
        onChangeText={(text) => setInputPriceValue(text)}  // Handles text change
        placeholder="Price"
      />
      <Text>You typed Price: {inputPriceValue}</Text>
      <Text>Description:</Text>
      <TextInput
        style={styles.inputField}
        value={inputDescValue}
        onChangeText={(text) => setInputDescValue(text)}// Handles text change
        placeholder="Price"
      />
      <Text>You typed Description: {inputDescValue}</Text>

      <Button
          title="Submit"
          onPress={() => console.log({inputNameValue, inputPriceValue, inputDescValue} ) }
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  }})
export default CreateItem;
