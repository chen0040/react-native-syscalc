import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import { TabNavigator } from "react-navigation";
import HomeScreen from '../home/HomeScreen';
import AboutScreen from '../about/AboutScreen';

const MainScreenNavigator = TabNavigator({
  Basics: { screen: HomeScreen },
  About: { screen: AboutScreen }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    inactiveTintColor: 'black',
    labelStyle: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    style: {
        backgroundColor: '#FFEE61'
    }
  },
});



MainScreenNavigator.navigationOptions = {
  title: 'System Capacity Calculator',
};

export default MainScreenNavigator;