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

const HomeComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const navigation = useNavigation();

  return (
    <View>
      <Text>This is the Home Screen</Text>
      <TextInput
        style={styles.inputField}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)} // Handles text change
        placeholder="Search"
      />
      <Text>You typed: {inputValue}</Text>
      <View style={styles.buttonView}>
        <Button
          style={styles.buttonStyle}
          title="All"
          onPress={() => alert("Button clicked!")} // Alert on button press
        />
        <Button
          title="Tech"
          onPress={() => alert("Button clicked!")} // Alert on button press
        />
        <Button
          title="House"
          onPress={() => alert("Button clicked!")} // Alert on button press
        />
        <Button
          title="Clothing"
          onPress={() => alert("Button clicked!")} // Alert on button press
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Item List")}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8vWudlY8BVzgLbMW4ZgbMsfRb8xX76GATw&s",
          }}
          style={{ width: 200, height: 100, objectFit: "contain" }}
        />
      </TouchableOpacity>

      <Button
        title="Go to item List"
        onPress={() => navigation.navigate("Item List")}
      />

          <Button
          title="Go to Test page to Create Item"
          onPress={() => navigation.navigate("Create Item")}
        />

<Button
          title="Go to Test page Profile"
          onPress={() => navigation.navigate("Profile")}
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
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#EAB68F",
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 15,
  },
});
export default HomeComponent;
