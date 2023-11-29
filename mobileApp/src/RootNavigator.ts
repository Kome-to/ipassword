import {Route} from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<any>();

export function navigate(screen: string, params?: object | undefined) {
  if (navigationRef.current) {
    navigationRef.current.navigate(screen, params);
  }
}

export function goBack() {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
}

export function getCurrentRoute():
  | Route<string, object | undefined>
  | undefined {
  return navigationRef.current
    ? navigationRef.current.getCurrentRoute()
    : undefined;
}
