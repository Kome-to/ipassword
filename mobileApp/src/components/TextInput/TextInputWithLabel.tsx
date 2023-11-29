import {Colors, FontSize} from '@common/assets/theme/variables';
import React from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import TextInputComponent, {InputType} from './TextInput';

interface TextInputWithLabelProps {
  fieldStyle: ViewStyle;
  required?: boolean;
  label: string;
  labelStyle: ViewStyle;
  value: string;
  keyboardType: KeyboardTypeOptions;
  inputStyle: ViewStyle;
  inputContainerStyles?: ViewStyle;
  inputErrStyle: TextStyle;
  handleChange: (e: string) => void;
  handleInputFocus: () => void;
  error?: any;
  touched?: any;
  addOns?: React.ReactNode;
  formatCharacters?: RegExp | undefined;
  handleBlur: ((e: any) => void) | undefined;
  editable: boolean;
  maxLength?: number;
}

const TextInputWithLabel = ({
  fieldStyle,
  required,
  label,
  labelStyle,
  value,
  inputStyle,
  inputContainerStyles,
  inputErrStyle,
  handleChange,
  handleInputFocus,
  error,
  touched,
  handleBlur,
  keyboardType,
  formatCharacters,
  addOns,
  editable = true,
  maxLength,
}: TextInputWithLabelProps) => {
  return (
    <View style={fieldStyle}>
      <View style={{flexDirection: 'row'}}>
        <Text style={labelStyle} numberOfLines={1}>
          {label}
        </Text>
        {required && (
          <Text
            style={{
              color: Colors.red,
              fontSize: FontSize.medium,
              marginHorizontal: 4,
              height: 16,
            }}>
            *
          </Text>
        )}
      </View>
      <TextInputComponent
        keyboardType={keyboardType}
        value={value !== null ? value : ''}
        inputType={InputType.WITH_VALIDATION}
        placeholderTextColor={Colors.veryBrightGrey}
        style={inputStyle}
        handleChange={handleChange}
        error={error}
        touched={touched}
        onFocus={handleInputFocus}
        handleBlur={handleBlur}
        errorStyle={inputErrStyle}
        formatCharacters={formatCharacters}
        editable={editable}
        containerStyles={inputContainerStyles}
        addOns={addOns}
        maxLength={maxLength}
      />
    </View>
  );
};

export default TextInputWithLabel;
