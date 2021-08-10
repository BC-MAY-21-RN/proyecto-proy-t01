import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required(' *Nombre es requerido'),
  email: yup.string().required(' *Correo electrónico es requerido'),
  password: yup
    .string()
    .min(8, ({min}) => ` *La contraseña debe tener minímo ${min} cáracteres`)
    .required(' *Contraseña es requerida')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      ' *Contraseña inválida',
    ),
  agreeTerms: yup
    .bool()
    .oneOf([true], 'Aceptar los Terminos y Condiciones es requerido'),
});
