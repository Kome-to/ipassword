import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from '@common/assets/images/svg';
import {Colors, SCREEN_WIDTH} from '@common/assets/theme/variables';
import {NotificationStatus} from '@common/utils/notify';
import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './ToastStyles';

export interface NotificationProps {
  status: NotificationStatus;
  message: string;
  messageWidth?: StyleProp<ViewStyle>;
  onUndo?: () => void;
}

export const widthToastIcon = 40;
export const widthToastUndo = 40;

const ToastComponent = ({
  status,
  message,
  onUndo,
}: NotificationProps): React.ReactElement => {
  const notificationStatus = {
    [NotificationStatus.SUCCESS]: {
      color: Colors.successIcon,
      icon: <SuccessIcon />,
    },
    [NotificationStatus.INFO]: {
      color: Colors.infoIcon,
      icon: <InfoIcon />,
    },
    [NotificationStatus.WARNING]: {
      color: Colors.warningIcon,
      icon: <WarningIcon />,
    },
    [NotificationStatus.ERROR]: {
      color: Colors.errorIcon,
      icon: <ErrorIcon />,
    },
  };
  return (
    <View style={styles.notification}>
      <View
        style={[
          styles.icon,
          {backgroundColor: notificationStatus[status].color},
        ]}>
        {notificationStatus[status].icon}
      </View>
      <View
        style={
          (styles.content,
          {width: onUndo ? SCREEN_WIDTH - 120 : SCREEN_WIDTH - 80})
        }>
        <Text style={[styles.message]}>{message}</Text>
      </View>
      {onUndo && (
        <TouchableOpacity style={styles.undoButton} onPress={onUndo}>
          <Text style={styles.undo}>Undo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default ToastComponent;
