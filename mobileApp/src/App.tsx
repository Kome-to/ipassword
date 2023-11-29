import {Colors} from '@common/assets/theme/variables';
import Loading from '@components/Modal/Loading/Loading';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './Navigator';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.background,
  },
});

const MyApp = () => {
  return (
    <View style={styles.safeArea}>
      <Navigator />
      <Loading />
    </View>
  );
};

export default MyApp;
