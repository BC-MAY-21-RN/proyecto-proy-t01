import React, {useState} from 'react';
import {
  TextInputCustom,
  InputContainer,
  InputIcon,
  AlertText,
} from './styledComponent';
import color from '../../constants/colors';
import {Text} from 'react-native';

const TextInputField = props => {
  const {
    label,
    icon,
    handleChange,
    handleBlur,
    values,
    formControlName,
    errors,
    touched,
    authError,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <InputContainer>
        <TextInputCustom
          placeholder={label}
          placeholderTextColor={color.ligh_grey}
          name={formControlName}
          onChangeText={handleChange(formControlName)}
          onBlur={handleBlur(formControlName)}
          value={values[formControlName]}
          secureTextEntry={!showPassword}
          s
        />
        <InputIcon
          name={icon}
          onPress={() => setShowPassword(!showPassword)}
          // name={showPassword ? 'visibility' : 'visibility-off'}
        />
      </InputContainer>
      <AlertText>
        {errors[formControlName] && touched[formControlName] ? (
          <Text>{errors[formControlName]}</Text>
        ) : (
          authError && <Text>{authError}</Text>
        )}
      </AlertText>
    </>
  );
};

export default TextInputField;
