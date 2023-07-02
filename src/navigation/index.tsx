import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  WelcomeScreen,
  AccountVerificationScreen,
  AccountVerifiedScreen,
  HomeScreen,
  LoginScreen,
  SignupScreen,
} from '../screens';

export type StackParamList = {
  WelcomeScreen: undefined;
  AccountVerificationScreen: undefined;
  AccountVerifiedScreen: undefined;
  HomeScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="AccountVerificationScreen"
          component={AccountVerificationScreen}
        />
        <Stack.Screen
          name="AccountVerifiedScreen"
          component={AccountVerifiedScreen}
        />

        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
