import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {roots} from '.';
import {LoginScreen} from '../screens/login';
import {HomeScreen} from '../screens/home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

const MainStackNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    {/*<Stack.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={roots.homeScreen}>
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.loginScreen}
        component={LoginScreen}
      />
       <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.homeScreen}
        component={()=><HomeScreen text={'text'}/>}
      />
    </Stack.Navigator> */}
  </NavigationContainer>
);

export default MainStackNavigator;
