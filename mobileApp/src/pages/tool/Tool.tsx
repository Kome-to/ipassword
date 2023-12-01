import {GroupIcon, RightArrow} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PasswordGenerator from './PassworeGenerator';
import {useDispatch} from 'react-redux';
import {toggleModal} from '@services/common/actions';
import {ModalNames} from '@common/constants';

const Tool = (): React.ReactElement => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => {
          dispatch(toggleModal(ModalNames.PASSWORD_GENERATOR));
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            backgroundColor: Colors.subPrimary,
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 20,
              paddingLeft: 20,
            }}>
            <GroupIcon width={36} height={36} />
            <View>
              <Text
                style={{
                  fontSize: FontSize.smallXxLarge,
                  color: Colors.text,
                  fontWeight: '500',
                }}>
                Tạo mật khẩu
              </Text>
              <Text
                style={{
                  fontSize: FontSize.normal,
                  color: Colors.gray,
                }}>
                Tạo mật khẩu mạnh và duy nhất
              </Text>
            </View>
          </View>
          <RightArrow width={40} height={40} stroke={Colors.primary} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => {}}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            backgroundColor: Colors.subPrimary,
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 20,
              paddingLeft: 20,
            }}>
            <GroupIcon width={36} height={36} />
            <View>
              <Text
                style={{
                  fontSize: FontSize.smallXxLarge,
                  color: Colors.text,
                  fontWeight: '500',
                }}>
                Phân tích
              </Text>
              <Text
                style={{
                  fontSize: FontSize.normal,
                  color: Colors.gray,
                }}>
                Kiểm tra mật khẩu của bạn
              </Text>
            </View>
          </View>
          <RightArrow width={40} height={40} stroke={Colors.primary} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => {}}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            backgroundColor: Colors.subPrimary,
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 20,
              paddingLeft: 20,
            }}>
            <GroupIcon width={36} height={36} />
            <View>
              <Text
                style={{
                  fontSize: FontSize.smallXxLarge,
                  color: Colors.text,
                  fontWeight: '500',
                }}>
                Chia sẻ
              </Text>
              <Text
                style={{
                  fontSize: FontSize.normal,
                  color: Colors.gray,
                }}>
                Quản lý tài nguyên chia sẻ
              </Text>
            </View>
          </View>
          <RightArrow width={40} height={40} stroke={Colors.primary} />
        </View>
      </TouchableOpacity>
      <PasswordGenerator />
    </View>
  );
};

export default Tool;
