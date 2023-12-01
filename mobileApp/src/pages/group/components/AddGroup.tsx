import api from '@common/api';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {SYMMETRIC_KEY} from '@common/constants';
import cryptography from '@common/utils/cryptography';
import Button from '@components/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLoading} from '@services/common/actions';
import {setGroups} from '@services/user/actions';
import {selectCurrentUser} from '@services/user/selector';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';

const AddGroup = (props): React.ReactElement => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const getGroups = async () => {
    try {
      dispatch(setLoading(true));
      const {data} = await api.user.getGroups();
      dispatch(setGroups([...data.groups]));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const onCreate = async () => {
    try {
      dispatch(setLoading(true));
      console.log(currentUser);
      const symmetricKey = await AsyncStorage.getItem(SYMMETRIC_KEY);
      if (symmetricKey) {
        const groupSymmetricKey = await cryptography.createSymmetricKey();
        const protectedGroupSymmetricKey = await cryptography.aesEncrypted(
          groupSymmetricKey,
          symmetricKey,
        );
        await api.user.createGroup({
          name,
          protectedSymmetricKey: protectedGroupSymmetricKey,
        });
        await getGroups();
      }
      setName('');
      props.onClose();
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ReactNativeModal isVisible={props.isVisible}>
      <View
        style={{
          backgroundColor: Colors.background,
          paddingHorizontal: 16,
          paddingVertical: 16,
          borderRadius: 8,
        }}>
        <Text
          style={{
            fontSize: FontSize.xxLarger,
            color: Colors.text,
            fontWeight: '500',
          }}>
          Tạo nhóm
        </Text>
        <TextInput
          style={{
            backgroundColor: Colors.subPrimary,
            marginTop: 30,
            borderRadius: 10,
            fontSize: FontSize.xLarge,
            paddingHorizontal: 10,
            marginBottom: 20,
            color: Colors.text,
          }}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder="Nhập tên nhóm"
          placeholderTextColor={Colors.gray}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 20,
          }}>
          <Button
            onPress={props.onClose}
            buttonContainerStyle={{backgroundColor: Colors.gray, width: 120}}>
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.text,
                fontWeight: '500',
              }}>
              Huỷ
            </Text>
          </Button>
          <Button
            disabled={!name}
            onPress={onCreate}
            buttonContainerStyle={{
              backgroundColor: Colors.primary,
              width: 120,
            }}>
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.text,
                fontWeight: '500',
              }}>
              Tạo
            </Text>
          </Button>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default AddGroup;
