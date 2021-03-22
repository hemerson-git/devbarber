import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens Import
import Preload from '../pages/Preload';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Preload" component={Preload}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  )
}

export default MainStack;
