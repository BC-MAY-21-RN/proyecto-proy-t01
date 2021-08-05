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
                  <TextInputField label="Nombre"/>
                  <TextInputField label="Correo"/>
                  <TextInputField label="Contraseña"/>
                  <CheckBoxField label="Acepto los Terminos y Condiciones."/>
                  <CustomButton text="Registrarme"/>
                  <CustomButton text="Registrarme con Google"/>
               </View>
            </Formik>
        </SafeAreaView>
    );
};

export default SignUp;
