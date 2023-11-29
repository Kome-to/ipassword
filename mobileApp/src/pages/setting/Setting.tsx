import {TOKEN_STORAGE_KEY} from '@common/constants';
import Button from '@components/Button/Button';
import {goToAuth} from '@pages/auth/start/StartNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View} from 'react-native';

const Setting = ({navigation}): React.ReactElement => {
  const logout = async () => {
    await AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
    console.log('Logout');
    goToAuth(navigation);
  };

  return (
    <View>
      <Text>Setting</Text>
      <Button onPress={logout}>
        <Text>Đăng xuất</Text>
      </Button>
    </View>
  );
};

export default Setting;
