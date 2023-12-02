import api from '@common/api';
import {CreatePasswordParams} from '@common/api/apiTypes';
import {Eye, EyeSlash} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ImageUrls, SYMMETRIC_KEY} from '@common/constants';
import Button from '@components/Button/Button';
import {setLoading} from '@services/common/actions';
import {
  setAddPassword,
  setPasswords,
  setSelectedPassword,
} from '@services/user/actions';
import {
  selectAddPassword,
  selectPasswords,
  selectSelectedPassword,
} from '@services/user/selector';
import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {serviceNames} from '../AddPassword';
import style from '../Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {passwordTransform} from '@pages/home/util';
var CryptoJS = require('crypto-js');

const AddPasswordForm = ({}) => {
  const dispatch = useDispatch();
  const addPassword = useSelector(selectAddPassword);
  const [canSave, setCanSave] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const passwords = useSelector(selectPasswords);
  const selectedPassword = useSelector(selectSelectedPassword);
  const [values, setValues] = useState<CreatePasswordParams>({
    displayName: '',
    username: '',
    password: '',
    url: '',
    serviceName: '',
  });

  const onClose = () => {
    dispatch(setAddPassword(''));
    dispatch(setSelectedPassword(''));
    setValues({
      displayName: '',
      username: '',
      password: '',
      url: '',
      serviceName: '',
    });
  };

  useEffect(() => {
    if (!addPassword) {
      if (selectedPassword) {
        setValues({
          displayName: selectedPassword.displayName,
          username: selectedPassword.username,
          password: selectedPassword.password,
          url: selectedPassword?.url,
          serviceName: selectedPassword?.serviceName,
        });
      } else {
        setValues({
          displayName: '',
          username: '',
          password: '',
          url: '',
          serviceName: '',
        });
      }
    } else {
      const service = serviceNames.find((item) => item.name === addPassword);
      if (service) {
        setValues({
          ...values,
          displayName: service.name || '',
          serviceName: service.name || '',
          url: service.url || '',
        });
      }
    }
  }, [addPassword, selectedPassword]);

  useEffect(() => {
    if (
      values.displayName &&
      values.password &&
      values.url &&
      values.username
    ) {
      setCanSave(true);
    } else {
      setCanSave(false);
    }
  }, [values]);

  const getUserData = async () => {
    try {
      const {data} = await api.user.getData();
      dispatch(setPasswords([...data.passwords]));
    } catch (e) {
      console.log(e);
    }
  };

  const onSave = async (values: CreatePasswordParams) => {
    try {
      dispatch(setLoading(true));

      const dataKey = await AsyncStorage.getItem(SYMMETRIC_KEY);
      const key = JSON.parse(dataKey || '')?.SymmetricKey;
      if (key) {
        const transform = await passwordTransform(values, key, 'en');
        if (!selectedPassword) {
          await api.user.createPassword(transform);
        } else {
          await api.user.updatePassword({
            id: selectedPassword.id,
            ...transform,
          });
        }
        await getUserData();
        onClose();
      }
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ReactNativeModal
      swipeDirection="right"
      style={{
        flex: 1,
        marginHorizontal: 0,
        marginVertical: 0,
        width: '100%',
        height: '100%',
        backgroundColor: Colors.background,
      }}
      isVisible={!!addPassword || !!selectedPassword}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <Button
            buttonContainerStyle={{
              backgroundColor: 'transparent',
            }}
            onPress={onClose}>
            <Text
              style={{
                color: Colors.blue3,
                fontSize: FontSize.xLarge,
              }}>
              Hủy
            </Text>
          </Button>
          <Button
            buttonContainerStyle={{
              backgroundColor: 'transparent',
            }}
            onPress={() => {
              onSave(values);
            }}>
            <Text
              style={{
                color: canSave ? Colors.blue3 : Colors.gray,
                fontSize: FontSize.xLarge,
                paddingLeft: 20,
              }}>
              Lưu
            </Text>
          </Button>
        </View>
        <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
          <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 6,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 6,
                }}
                source={
                  serviceNames.find(
                    (item) =>
                      item.name === addPassword ||
                      item.name === selectedPassword?.serviceName,
                  )?.image || ImageUrls.LOCK
                }
              />
            </View>
            <TextInput
              onChangeText={(text) => {
                setValues({...values, displayName: text});
              }}
              style={{
                flex: 1,
                borderRadius: 6,
                backgroundColor: Colors.subPrimary,
                paddingHorizontal: 14,
                fontSize: FontSize.xxxLarger,
                color: Colors.text,
                fontWeight: '600',
              }}
              value={values.displayName}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.subPrimary,
              marginTop: 30,
              borderRadius: 6,
            }}>
            <View style={style.textField}>
              <Text style={{color: Colors.text, fontSize: FontSize.large}}>
                URL
              </Text>
              <TextInput
                onChangeText={(text) => {
                  setValues({...values, url: text});
                }}
                style={{color: Colors.text, fontSize: FontSize.large}}
                value={values.url || ''}
              />
            </View>
            <View style={style.textField}>
              <Text style={{color: Colors.text, fontSize: FontSize.large}}>
                Username
              </Text>
              <TextInput
                onChangeText={(text) => {
                  setValues({...values, username: text});
                }}
                value={values.username}
                style={{color: Colors.text, fontSize: FontSize.large}}
              />
            </View>
            <View style={[style.textField, {position: 'relative'}]}>
              <Text style={{color: Colors.text, fontSize: FontSize.large}}>
                Mật khẩu
              </Text>
              <TextInput
                onChangeText={(text) => {
                  setValues({...values, password: text});
                }}
                value={values.password}
                secureTextEntry={hidePassword}
                style={{
                  color: Colors.text,
                  fontSize: FontSize.large,
                  paddingRight: 46,
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setHidePassword(!hidePassword);
                }}>
                {hidePassword ? (
                  <Eye style={{position: 'absolute', bottom: 22, right: 10}} />
                ) : (
                  <EyeSlash
                    style={{position: 'absolute', bottom: 22, right: 10}}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default AddPasswordForm;
