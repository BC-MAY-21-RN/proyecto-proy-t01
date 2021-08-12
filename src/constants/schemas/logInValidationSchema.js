import * as yup from 'yup';
import {span} from '../../i18n/es';

export const logInValidationSchema = yup.object().shape({
  email: yup.string().required(span('emailError')),
  password: yup.string().required(span('passwordError')),
});
