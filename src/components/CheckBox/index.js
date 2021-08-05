/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxField = ({setFieldValue, values, label, name}) => {
    return (
        <>
        <View>
            <CheckBox/>
            <View>
                <Text>{label}</Text>
            </View>
        </View>
        </>
    );
};

export default CheckBoxField;
