import {Colors} from '@common/assets/theme/variables';
import Loading from '@components/Modal/Loading/Loading';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './Navigator';
import {setLoading} from '@services/common/actions';
import {useDispatch} from 'react-redux';
import api from '@common/api';
import {setCurrentUser} from '@services/user/actions';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.background,
  },
});

const MyApp = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      dispatch(setLoading(false));
      const {data} = await api.user.getMe();
      dispatch(setCurrentUser(data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    dispatch(setLoading(false));
    getUser();
  }, []);
  return (
    <View style={styles.safeArea}>
      <Navigator />
      <Loading />
    </View>
  );
};

export default MyApp;
