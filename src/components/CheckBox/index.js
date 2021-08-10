/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxField = ({setFieldValue, values, label, formControlName, errors, touched}) => {
    return (
        <>
        <View>
            <CheckBox
                disabled={false}
                onValueChange={newValue => setFieldValue(formControlName, newValue)}
                value={values[formControlName]}
            />
            <View>
                <Text>{label}</Text>
                {errors[formControlName] && touched[formControlName] && (<Text>{errors[formControlName]}</Text>)}
            </View>
        </View>
        </>
    );
};

export default CheckBoxField;
