import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../homescreen';

import Couches from '../cartscreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Appointment from '../orderscreen';
import chitchat from '../favouritescreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarShowLabel: true,
    tabBarActiveBackgroundColor:'silver',
    tabBarActiveColor:'black',
    tabBarStyle: { height: 40,backgroundColor:'maroon', opacity:0.8},
    
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={"home"} size={20}  color="pink"  />
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={Appointment}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={25} color="pink" />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={chitchat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="attach-money" size={25} color="pink" />
          ),
        }}
      />
      <Tab.Screen
        name="coach"
        component={Couches}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={25} color="pink" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;