import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconsView} from './styledComponents';
export const Icons = ({navigation, name, color, size}) => {
  return (
    <IconsView>
      <Icon color={color} name={name} onPress={navigation} size={size} />
    </IconsView>
  );
};
