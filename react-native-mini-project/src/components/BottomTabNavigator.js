import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeComponent from './HomeComponent';
import Profile from './Profile';
import CreateItem from './CreateItem';


const Tab =createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeComponent}  />
        <Tab.Screen name="Profile" component={Profile}  />
        <Tab.Screen name="CreateItem" component={CreateItem} />
    </Tab.Navigator>
 
  )
}

export default BottomTabNavigator
