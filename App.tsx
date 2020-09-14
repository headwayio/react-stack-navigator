import React from 'react';
import Home from './src/Home';
import Details from './src/Details';
import Modal from './src/Modal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type MainStackParamList = {
  Home: undefined;
  Details: { message: string };
};

export type RootStackParamList = {
  Main: MainStackParamList;
  Modal: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();
const RootStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Details" component={Details} />
  </MainStack.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Modal" component={Modal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
