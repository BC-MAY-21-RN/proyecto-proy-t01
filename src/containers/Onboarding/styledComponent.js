import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../constants/colors';

export const SkipStyled = ({...props}) => (
  <TouchableOpacity
    title="Skip"
    color="#000"
    {...props}
    style={{marginHorizontal: 20, borderRadius: 20}}>
    <Text style={{fontSize: 20, color: colors.white}}>Saltar</Text>
  </TouchableOpacity>
);

export const NextStyled = ({...props}) => (
  <TouchableOpacity title="Next" {...props} style={{marginHorizontal: 20}}>
    <Text style={{fontSize: 20, color: colors.white}}>Siguiente</Text>
  </TouchableOpacity>
);

export const DoneButtonComponent = ({...props}) => (
  <TouchableOpacity title="Next" {...props} style={{marginHorizontal: 20}}>
    <Text style={{fontSize: 20, color: colors.white}}>Iniciar</Text>
  </TouchableOpacity>
);

export const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(220, 67, 80, 1)' : 'rgba(255,255,255,1.5)';
  return (
    <View
      style={{
        width: 8,
        height: 8,
        marginHorizontal: 5,
        backgroundColor,
        borderRadius: 20,
      }}
    />
  );
};
