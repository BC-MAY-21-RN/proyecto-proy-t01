import React from 'react';
import I18n from 'react-native-i18n';

I18n.fallbacks = true;
I18n.translations = {
  en: {
    name: 'Nombre',
    email: 'Correo electrónico',
    password: 'Contraseña',
    terms: 'Acepto los Terminos y Condiciones.',
    register: 'Registrarme',
    registerGoogle: 'Registrarme con Google',
    login: 'Iniciar sesión',
    loginGoogle: 'Iniciar sesión con Google',
    alreadyAccount: 'Ya tienes una cuenta? Inicia sesión',
    dontAccount: 'No tienes una cuenta? Registrate',
  },
};

const Span = ({text}) => I18n.t(text);
export const span = text => I18n.t(text);

export default Span;
