import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";



const Stack = createNativeStackNavigator();


const ProfileNavigation = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  )
}

export default ProfileNavigation
