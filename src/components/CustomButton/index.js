/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { StyledButton } from './styledComponent';
const CustomButton = ({text}) => {
    return (
    <StyledButton>
        <View>
            <Text>{text}</Text>
        </View>
    </StyledButton>

    );
};

export default CustomButton;
