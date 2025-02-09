// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  // Import NavigationContainer
import { createStackNavigator } from '@react-navigation/stack';  // Import createStackNavigator
import Invitecode from './screens/InviteCode';                    // Import Invitecode
import PropertyDetails from './screens/PropertyDetails';              // Import propertydetails
import menuScreen from './screens/menuScreen';    
import temp from './screens/temp'        // Import temp
import LogOutcomp from './screens/LogOutcomp';

// Create Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Invite" component={Invitecode} />
        <Stack.Screen name="Property" component={PropertyDetails} />
        <Stack.Screen name="menu" component={menuScreen} />
        <Stack.Screen name="temp" component={temp}/>
        <Stack.Screen name="LogOut" component={LogOutcomp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
