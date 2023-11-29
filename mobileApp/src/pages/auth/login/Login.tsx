import {ScenesKey} from '@common/constants';
import {NavigationProps} from '@common/types';
import DismissKeyboard from '@components/DismissKeyboard/DismissKeyboard';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, View} from 'react-native';

interface LoginProps {
  navigation: NavigationProps;
}

const Login = ({navigation}: LoginProps): React.ReactElement => {
  const [isHidden, setIsHidden] = useState(false);
  const gotoSignUpScreen = () => {
    navigation.navigate(ScenesKey.SIGN_UP);
  };
  return (
    <View style={{backgroundColor: 'red'}}>
      <DismissKeyboard>
        <KeyboardAvoidingView>
          {!isHidden && (
            <Text
              onPress={() => {
                setIsHidden(true);
              }}>
              Login
            </Text>
          )}
          <Text onPress={gotoSignUpScreen}>Register as a new user</Text>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </View>
  );
};

export default Login;
