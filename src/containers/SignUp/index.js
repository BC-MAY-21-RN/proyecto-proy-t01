/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import { CheckBoxField, TextInputField, CustomButton } from '../../components';

const SignUp = () => {
    return (
        <SafeAreaView>
            <Formik>
            <View>
               <View>
               <TextInputField label="Nombre"/>
               </View>
                <View>
                   <TextInputField label="Correo"/>
                </View>
                <View>
                   <TextInputField label="Contraseña"/>
                </View>
                <View>
                   <CheckBoxField label="Acepto los Terminos y Condiciones."/>
                </View>
                <View>
                   <CustomButton text="Registrarme"/>
                </View>
                <View>
                   <CustomButton text="Registrarme con Google"/>
                </View>
                </View>
            </Formik>
        </SafeAreaView>
    );
};

export default SignUp;
