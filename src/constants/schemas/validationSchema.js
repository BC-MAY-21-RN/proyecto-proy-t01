import * as yup from 'yup';
import {span} from '../../i18n/es';

export const validationSchema = yup.object().shape({
  name: yup.string().required(span('nameError')),
  email: yup.string().required(span('emailError')),
  password: yup
    .string()
    .min(8, span('passwordCharacter'))
    .required(span('passwordError'))
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      span('passwordInvalid'),
    ),
  agreeTerms: yup.bool().oneOf([true], span('termsError')),
});
