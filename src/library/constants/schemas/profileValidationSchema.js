import * as yup from 'yup';
import {span} from '../../i18n/es';

export const profileValidationSchema = yup.object().shape({
  name: yup.string().required(span('nameError')),
});