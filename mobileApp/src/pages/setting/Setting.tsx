import {NoteIcon, RightArrow, UserIcon} from '@common/assets/images/svg';
import {Colors, FontSize, SCREEN_HEIGHT} from '@common/assets/theme/variables';
import {SYMMETRIC_KEY, TOKEN_STORAGE_KEY} from '@common/constants';
import Button from '@components/Button/Button';
import {goToAuth} from '@pages/auth/start/StartNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {selectCurrentUser} from '@services/user/selector';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

const Setting = ({navigation}): React.ReactElement => {
  const currentUser = useSelector(selectCurrentUser);
  const logout = async () => {
    await AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
    await AsyncStorage.removeItem(SYMMETRIC_KEY);
    console.log('Logout');
    goToAuth(navigation);
  };

  const container1 = [
    {
      icon: <NoteIcon />,
      name: 'Thông tin tài khoản',
    },
    {
      icon: <NoteIcon />,
      name: 'Cài đặt nâng cao',
    },
    {
      icon: <NoteIcon />,
      name: 'Nâng cấp tài khoản',
    },
    {
      icon: <NoteIcon />,
      name: 'Thay đổi mật khẩu',
    },
  ];

  const container2 = [
    {
      icon: <NoteIcon />,
      name: 'Giúp đỡ và hỗ trợ',
    },
    {
      icon: <NoteIcon />,
      name: 'Đánh giá iPassword',
    },
  ];

  const container3 = [
    {
      icon: <NoteIcon />,
      name: 'Chính sách bảo mật',
    },
  ];
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: SCREEN_HEIGHT - 220,
          paddingBottom: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: Colors.subPrimary,
              borderRadius: 40,
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <UserIcon width={40} height={40} />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: Colors.text, fontSize: FontSize.xxLarger}}>
            Xin chào
            <Text style={{color: Colors.primary, fontSize: FontSize.xxLarger}}>
              {currentUser?.firstName &&
                currentUser?.lastName &&
                `${currentUser.firstName} ${currentUser.firstName}`}{' '}
              {'Duc Anh'}
            </Text>
          </Text>
          <Text style={{color: Colors.text, fontSize: FontSize.xLarge}}>
            {currentUser.email}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.subPrimary,
            marginTop: 30,
            marginHorizontal: 10,
            borderRadius: 6,
          }}>
          {container1.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => {}}>
              <View
                style={[
                  {
                    width: '100%',
                    height: 50,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  },
                  i < container1.length - 1
                    ? {
                        borderBottomColor: Colors.gray,
                        borderStyle: 'solid',
                        borderBottomWidth: 0.4,
                      }
                    : {},
                ]}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 14,
                    marginHorizontal: 20,
                  }}>
                  {item.icon}
                  <Text style={{color: Colors.text, fontSize: FontSize.xLarge}}>
                    {item.name}
                  </Text>
                </View>
                <RightArrow stroke={Colors.gray} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            backgroundColor: Colors.subPrimary,
            marginTop: 26,
            marginHorizontal: 10,
            borderRadius: 6,
          }}>
          {container2.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => {}}>
              <View
                style={[
                  {
                    width: '100%',
                    height: 50,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  },
                  i < container2.length - 1
                    ? {
                        borderBottomColor: Colors.gray,
                        borderStyle: 'solid',
                        borderBottomWidth: 0.4,
                      }
                    : {},
                ]}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 14,
                    marginHorizontal: 20,
                  }}>
                  {item.icon}
                  <Text style={{color: Colors.text, fontSize: FontSize.xLarge}}>
                    {item.name}
                  </Text>
                </View>
                <RightArrow stroke={Colors.gray} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            backgroundColor: Colors.subPrimary,
            marginTop: 26,
            marginHorizontal: 10,
            borderRadius: 6,
          }}>
          {container3.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => {}}>
              <View
                style={[
                  {
                    width: '100%',
                    height: 50,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                  },
                  i < container3.length - 1
                    ? {
                        borderBottomColor: Colors.gray,
                        borderStyle: 'solid',
                        borderBottomWidth: 0.4,
                      }
                    : {},
                ]}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 14,
                    marginHorizontal: 20,
                  }}>
                  {item.icon}
                  <Text style={{color: Colors.text, fontSize: FontSize.xLarge}}>
                    {item.name}
                  </Text>
                </View>
                <RightArrow stroke={Colors.gray} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Button
        buttonContainerStyle={{
          borderWidth: 2,
          borderColor: Colors.gray,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          width: '90%',
          marginHorizontal: '5%',
        }}
        onPress={logout}>
        <Text style={{color: Colors.text, fontSize: FontSize.xLarge}}>
          Đăng xuất
        </Text>
      </Button>
    </View>
  );
};

export default Setting;
