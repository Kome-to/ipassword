import {OptionToast2} from '@common/assets/theme/common';
import {Colors} from '@common/assets/theme/variables';
import ToastComponent from '@components/Toast/Toast';
import React from 'react';
import Toast, {ToastOptions} from 'react-native-root-toast';

export enum NotificationStatus {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

type NotifyFunction = (
  message?: string,
  options?: ToastOptions,
  onUndo?: () => void,
) => any;

interface Notify {
  success: NotifyFunction;
  info: NotifyFunction;
  warning: NotifyFunction;
  error: NotifyFunction;
  dismiss: NotifyFunction;
}

const showToast = (
  message: string,
  status: NotificationStatus,
  options?: ToastOptions,
  onUndo?: () => any,
) => {
  return Toast.show(
    (
      <ToastComponent message={message} status={status} onUndo={onUndo} />
    ) as any,
    {
      ...OptionToast2,
      position: onUndo && -70, // show the toast above the apps tab
      ...options,
    },
  );
};

const hideToast = (toast: any) => {
  Toast.hide(toast);
};

export const notify: Notify = {
  success: (message = 'Success!', options = {}, onUndo) => {
    return showToast(
      message,
      NotificationStatus.SUCCESS,
      {...options, backgroundColor: Colors.success},
      onUndo,
    );
  },
  info: (message = 'Info!', options = {}, onUndo) => {
    return showToast(
      message,
      NotificationStatus.INFO,
      {...options, backgroundColor: Colors.info},
      onUndo,
    );
  },
  warning: (message = 'Warning!', options = {}, onUndo) => {
    return showToast(
      message,
      NotificationStatus.WARNING,
      {...options, backgroundColor: Colors.warning},
      onUndo,
    );
  },
  error: (message = '', options = {}, onUndo) => {
    if (message) {
      return showToast(
        message,
        NotificationStatus.ERROR,
        {...options, backgroundColor: Colors.error},
        onUndo,
      );
    }
  },
  dismiss: (toast: any) => {
    hideToast(toast);
  },
};
