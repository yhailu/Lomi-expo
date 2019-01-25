import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MatchesScreen from '../screens/MatchesScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        'ios-people'
      }
    />
  ),
};

const MatchesStack = createStackNavigator({
  Matches: MatchesScreen,
});

MatchesStack.navigationOptions = {
  tabBarLabel: 'Matches',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={'ios-beer'}
      />
  ),
};

const LinksStack = createStackNavigator({
  Profile: ProfileScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-person'}
    />
  ),
};

const MessagesStack = createStackNavigator({
  Messages: MessagesScreen,
});

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-mail'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MatchesStack,
  LinksStack,
  MessagesStack,
});
