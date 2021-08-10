import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape({
  name: yup.string().required(' *Nombre es requerido'),
  email: yup.string().required(' *Correo electrónico es requerido'),
  password: yup
    .string()
    .min(8, ({min}) => ` *Password must be at least ${min}`)
    .required(' *Contraseña es requerida')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      ' *Invalid password',
    ),
  agreeTerms: yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
});
