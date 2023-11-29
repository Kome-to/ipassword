import {Colors} from '@common/assets/theme/variables';
import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native';

import styles from './ButtonStyles';

export interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  loading?: boolean;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  colorActivityIndicator?: string;
  disabled?: boolean;
}

export interface ButtonClass {
  [index: string]: object;
}

type Props = ButtonProps & TouchableOpacityProps;

const Button = ({
  colorActivityIndicator = Colors.white,
  children,
  loading = false,
  onPress,
  buttonContainerStyle,
  disabled = false,
}: Props): React.ReactElement => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.buttonContainer, buttonContainerStyle]}
      activeOpacity={disabled ? 1 : 0.2}
      onPress={() => {
        if (!loading) {
          onPress();
        }
      }}>
      {loading && children && (
        <ActivityIndicator color={colorActivityIndicator} />
      )}
      {!loading && children}
    </TouchableOpacity>
  );
};

export default Button;
