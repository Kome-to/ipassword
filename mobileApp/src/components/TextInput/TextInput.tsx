import React, {useEffect, useState} from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Keyboard,
} from 'react-native';

import styles from './TextInputStyles';
import {EyeSlash, Eye, SearchIcon2} from '@common/assets/images/svg';
import {isIOS} from '@common/utils/detectPlatform';

export interface TextInputComponentProps {
  inputType?: InputType;
  label?: string;
  children?: React.ReactNode;
  value: string;
  isPassValueFromChild?: boolean;
  handleChange: (e: any) => void;
  error?: any;
  errorStyle?: TextStyle;
  touched?: any;
  handleBlur?: (e: any) => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  addOns?: React.ReactNode;
  secureText?: boolean;
  searchIcon?: boolean;
  isSecureText?: boolean;
  formatCharacters?: RegExp | undefined;
  placeholderStyle?: TextStyle;
  containerStyles?: ViewStyle;
  fieldStyle?: ViewStyle | ViewStyle[];
  errorCheckOutSide?: boolean;
  errorCheckOutSideValue?: string;
  isMultiline?: boolean;
  onToggleSecure?: (secure: boolean) => void;
  inputRef?: any;
  editable?: boolean;
  unit?: string;
  unitStyle?: ViewStyle;
  healthTrackInput?: boolean;
  keyboardType?: string;
  isFormatKcalBurned?: boolean;
  onSearch?: () => void;
  searchColor?: string;
  labelStyles?: TextStyle | TextStyle[];
  isRequired?: boolean;
  rightAdornment?: React.ReactNode;
}
type Props = TextInputComponentProps & TextInputProps & any;

export enum InputType {
  NORMAL = 'NORMAL',
  WITH_VALIDATION = 'WITH_VALIDATION',
}

const TextInputComponent = ({
  inputType = InputType.NORMAL,
  label,
  value,
  isPassValueFromChild = false,
  secureText,
  searchIcon = false,
  handleChange,
  error,
  errorStyle,
  touched,
  handleBlur,
  addOns,
  style,
  onChange,
  formatCharacters,
  placeholderStyle,
  placeholder,
  containerStyles = {},
  fieldStyle,
  errorCheckOutSide,
  errorCheckOutSideValue,
  isMultiline = false,
  onToggleSecure,
  isSecureText = false,
  inputRef,
  editable = true,
  unit,
  unitStyle,
  keyboardType,
  healthTrackInput = false,
  isFormatKcalBurned = false,
  onSearch,
  searchColor,
  labelStyles,
  isRequired,
  rightAdornment,
  ...rest
}: Props): React.ReactElement => {
  const [secure, toggleSecure] = useState(isSecureText);
  const [inputValue, setInputValue] = useState(value);
  const [isPlaceholder, setIsPlaceholder] = useState(
    value !== undefined && value !== null ? value.length === 0 : false,
  );

  useEffect(() => {
    if (value === '') {
      setInputValue('');
      setIsPlaceholder(true);
    }
    if (isPassValueFromChild && value !== '') {
      setInputValue(value);
      setIsPlaceholder(false);
    }
  }, [value, isPassValueFromChild]);

  const getInputStyles = (
    isTouched: boolean | undefined,
    errorMessage: string | undefined,
  ) => {
    let inputStyles = {};
    inputStyles = style || styles.textInput;

    if (isPlaceholder && placeholderStyle) {
      inputStyles = {...inputStyles, ...placeholderStyle};
    }

    if (isTouched && errorMessage && inputType === InputType.WITH_VALIDATION) {
      inputStyles = {
        ...styles.textInputError,
        ...inputStyles,
      };
    }
    return inputStyles;
  };

  const handleChangeText = (text: string) => {
    if (isFormatKcalBurned && parseInt(text) > 9999) {
      return setInputValue(text.substring(0, 4));
    }
    if (healthTrackInput && parseInt(text) > 999) {
      return setInputValue(text.substring(0, 3));
    }
    if (formatCharacters && !formatCharacters.test(text)) {
      if (text.length === 1) {
        setInputValue('');
      }
      return;
    }
    setInputValue(text);
    handleChange(text);
  };

  const onClickEyeIcon = () => {
    if (onToggleSecure) {
      onToggleSecure(!secure);
    }
    toggleSecure(!secure);
  };

  const handleChangeInput = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setIsPlaceholder(e.nativeEvent.text.length === 0);
    if (onChange) {
      onChange(e);
    }
  };

  const SecureIcon = secure ? EyeSlash : Eye;

  return (
    <View style={fieldStyle}>
      {label && (
        <Text style={labelStyles || styles.labelInput}>
          {label}
          {isRequired && <Text style={styles.asterisk}> *</Text>}
        </Text>
      )}
      <View style={[styles.container, containerStyles]}>
        {addOns}
        {searchIcon && (
          <TouchableOpacity
            style={{marginRight: isIOS ? 10 : 0}}
            onPress={onSearch}>
            <SearchIcon2 color={searchColor} />
          </TouchableOpacity>
        )}
        <TextInput
          ref={inputRef}
          multiline={isMultiline}
          value={inputValue}
          onChangeText={handleChangeText}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={getInputStyles(touched, error)}
          secureTextEntry={secure}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            if (!isMultiline) {
              Keyboard.dismiss();
            }
          }}
          editable={editable}
          {...rest}
          keyboardType={keyboardType}
        />
        {secureText && (
          <TouchableOpacity
            onPress={onClickEyeIcon}
            style={styles.touchableEye}>
            <SecureIcon style={styles.iconEye} />
          </TouchableOpacity>
        )}
        {rightAdornment}
        {unit && (
          <Text style={unitStyle ? unitStyle : styles.unit}>{unit}</Text>
        )}
      </View>
      {touched && error && (
        <Text style={[styles.errText, errorStyle]}>{error}</Text>
      )}
      {errorCheckOutSide && (
        <Text style={[styles.errText, errorStyle]}>
          {errorCheckOutSideValue}
        </Text>
      )}
    </View>
  );
};
export default TextInputComponent;
