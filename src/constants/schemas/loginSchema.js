import * as yup from 'yup';

export const logInValidationSchema = yup.object().shape({
  email: yup.string().required(' *Correo electrónico es requerido'),
  password: yup.string().required(' *Contraseña es requerida'),
});
