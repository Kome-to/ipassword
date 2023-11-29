import {Colors} from '@common/assets/theme/variables';
import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './ButtonStyles';

export interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  loading?: boolean;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  colorActivityIndicator?: string;
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
  disabled = false,
  buttonContainerStyle,
}: Props): React.ReactElement => {
  return (
    <TouchableOpacity
      containerStyle={[styles.buttonContainer, buttonContainerStyle]}
      disabled={disabled}
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
