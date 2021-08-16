import 'react-native-gesture-handler';
import React from 'react';
import {Home, LogIn, SignUp} from '../../containers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';

const Tab = createBottomTabNavigator();

const TabListItems = [
  {
    key: 1,
    name: 'SignUp',
    tabBarLabel: 'Registrate',
    component: SignUp,
    icon: 'home',
    title: 'Home',
  },
  {
    key: 2,
    name: 'LogIn',
    tabBarLabel: 'MisLogIn',
    component: LogIn,
    icon: 'people',
    title: 'My LogIn',
  },
];

const TabList = () => {
  return TabListItems.map(item => {
    return (
      <Tab.Screen
        key={item.key}
        name={item.name}
        component={item.component}
        options={{
          tabBarLabel: item.tabBarLabel,
          tabBarIcon: ({focused}) => (
            <Icon
              name={item.icon}
              size={30}
              color={focused ? colors.white : colors.red}
            />
          ),
        }}
      />
    );
  });
};

const MyTabs = () => {
  return <Tab.Navigator>{TabList}</Tab.Navigator>;
};

export default MyTabs;
