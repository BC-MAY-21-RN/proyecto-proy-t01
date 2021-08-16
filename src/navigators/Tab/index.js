import 'react-native-gesture-handler';
import React from 'react';
import {LogIn, SignUp} from '../../containers';
import Home from '../../containers/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';

const Tab = createBottomTabNavigator();

const TabListItems = [
  {
    key: 1,
    name: 'Home',
    component: Home,
    icon: 'home',
    title: 'Home',
  },
];

const TabList = TabListItems.map(item => (
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
));

const MyTab = () => {
  return <Tab.Navigator>{TabList}</Tab.Navigator>;
};

export default MyTab;
