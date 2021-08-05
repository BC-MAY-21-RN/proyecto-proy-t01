/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { TextInputCustom } from './styledComponent';

const TextInputField = ({label}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInputCustom/>
        </View>
    );
};

export default TextInputField;
