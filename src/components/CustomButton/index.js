/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import { StyledButton } from './styledComponent';
const CustomButton = ({text, onPress}) => {
    return (
    <StyledButton
    onPress = {onPress}>
        <View>
            <Text>{text}</Text>
        </View>
    </StyledButton>

    );
};

export default CustomButton;
