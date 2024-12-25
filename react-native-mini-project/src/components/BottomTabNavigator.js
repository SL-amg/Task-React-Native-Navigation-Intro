import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeComponent from './HomeComponent';
import Profile from './Profile';
import CreateItem from './CreateItem';
import HomeNavigation from '../Navigation/HomeNavigation';
import ProfileNavigation from '../Navigation/ProfileNavigation';


const Tab =createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavigation}  />
        <Tab.Screen name="Profile" component={ProfileNavigation}  />
        <Tab.Screen name="CreateItem" component={CreateItem} />
    </Tab.Navigator>
 
  )
}

export default BottomTabNavigator
