import {NavigationProps} from '@common/types';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {goToAuth} from './StartNavigation';

interface StartProps {
  navigation: NavigationProps;
}

// import styles from './StartStyles';
import Logo from '@components/Logo/Logo';

const Start = ({navigation}: StartProps) => {
  const [isStartEnd, setIsStartEnd] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsStartEnd(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isStartEnd) {
      goToAuth(navigation);
    }
  }, [isStartEnd]);

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Logo style={{}} />
    </View>
  );
};

export default Start;
