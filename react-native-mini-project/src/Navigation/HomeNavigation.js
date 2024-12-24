
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeComponent from "../components/HomeComponent";
import ItemList from "../components/ItemList";
import OneItemDetail from "../components/OneItemDetail";



const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeComponent} />
      <Stack.Screen name="Item List" component={ItemList} />
      <Stack.Screen name="OneItemDetail" component={OneItemDetail} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;