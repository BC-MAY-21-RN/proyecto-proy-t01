import React from 'react';
import I18n from 'react-native-i18n';

I18n.fallbacks = true;
I18n.translations = {
  en: {
    nameLow: 'name',
    emailLow: 'email',
    passwordLow: 'password',
    agreeTermsLow: 'agreeTerms',
    name: 'Nombre',
    nameError: ' *Nombre es requerido',
    email: 'Correo electrónico',
    emailUsed: ' *Correo electrónico en uso',
    emailError: ' *Correo electrónico es requerido',
    password: 'Contraseña',
    passwordError: ' *La contraseña es requerida',
    passwordCharacter: ' *La contraseña debe tener minímo 8 cáracteres',
    passwordInvalid: ' *Contraseña inválida',
    terms: 'Acepto los Terminos y Condiciones.',
    termsError: ' *Aceptar terminos',
    register: 'Registrarme',
    registerGoogle: 'Registrarme con Google',
    login: 'Iniciar sesión',
    loginGoogle: 'Iniciar sesión con Google',
    alreadyAccount: '¿Ya tienes una cuenta? Inicia sesión',
    dontAccount: '¿No tienes una cuenta? Registrate',
    adopt: '¡Adopta un nuevo',
    friend: 'Amig',
    exclamation: '!',
    welcome: '¡Bienvenido de',
    new: 'Nuev',
    wrongAuth: '*Correo y contraseña no coinciden',
    logout: 'Cerrar Sesión',
    signingUp: 'Registrando...',
    signedUp: 'Completado',
    update: 'Actualizar',
    small: 'Pequeño',
    medium: 'Mediano',
    big: 'Grande',
    editProfile: 'Editar Perfil',
    exit: 'Salir',
  },
};

const Span = ({text}) => I18n.t(text);
export const span = text => I18n.t(text);

export default Span;
