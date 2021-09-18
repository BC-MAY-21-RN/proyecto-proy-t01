import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../library/constants';
import {Home, Favorites, Profile} from '../containers';

const Tab = createBottomTabNavigator();

const listItems = [
  {
    key: 1,
    name: 'Inicio',
    component: Home,
    icon: 'home',
  },
  {
    key: 2,
    name: 'Favoritos',
    component: Favorites,
    icon: 'favorite',
  },
  {
    key: 3,
    name: 'Perfil',
    component: Profile,
    icon: 'account-circle',
  },
];

const tabList = listItems.map(item => (
  <Tab.Screen
    key={item.key}
    name={item.name}
    component={item.component}
    options={{
      tabBarLabel: item.tabBarLabel,
      tabBarActiveTintColor: colors.red,
      tabBarInactiveTintColor: colors.ligh_grey,

      tabBarIcon: ({focused}) => (
        <Icon
          color={focused ? colors.red : colors.ligh_grey}
          name={item.icon}
          size={24}
        />
      ),
    }}
  />
));

export const TabNavigator = () => (
  <Tab.Navigator screenOptions={{header: () => null}}>{tabList}</Tab.Navigator>
);
