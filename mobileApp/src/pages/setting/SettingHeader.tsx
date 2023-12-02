import React from 'react';
import {Text, View} from 'react-native';

import {RightArrow} from '@common/assets/images/svg';
import {ScenesKey} from '@common/constants';
import Button from '@components/Button/Button';
import style from '../home/HomeStyles';
import {Colors, FontSize} from '@common/assets/theme/variables';

const SettingHeader = (props) => {
  const renderHeader = (screen) => {
    let title = '';
    let back = true;
    switch (screen) {
      case ScenesKey.SETTING_ACCOUNT:
        title = 'Tài khoản';
        break;
      case ScenesKey.SETTING_POLICY:
        title = 'Chính sách';
        break;
      case ScenesKey.SETTING_CHANGE_PASS:
        title = 'Thay đổi mật khẩu';
        break;
      case ScenesKey.SETTING_CHANGE_PASS:
        title = 'Thay đổi mật khẩu';
        break;
      case ScenesKey.SETTING_ADVANCE:
        title = 'Cài đặt nâng cao';
        break;
      default:
        title = 'Cài đặt';
        back = false;
        break;
    }
    return (
      <View
        style={{
          marginVertical: 20,
          justifyContent: 'flex-start',
          alignItems: 'center',
          position: 'relative',
          display: 'flex',
        }}>
        {back && (
          <Button
            buttonContainerStyle={{
              left: 0,
              position: 'absolute',
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              gap: 10,
            }}
            onPress={() => {
              props.navigation
                .getParent()
                .navigate(ScenesKey.SETTING_TABS, {screen: ScenesKey.SETTING});
            }}>
            <RightArrow
              style={{transform: [{rotate: '180deg'}]}}
              stroke={Colors.blue2}
            />
            <Text style={{color: Colors.blue2, fontSize: FontSize.large}}>
              Quay lại
            </Text>
          </Button>
        )}
        <View>
          <Text
            style={{
              ...style.title,
              lineHeight: 40,
              fontSize:
                screen === ScenesKey.SETTING
                  ? FontSize.xxxLarger
                  : FontSize.xxLarger,
            }}>
            {title}
          </Text>
        </View>
      </View>
    );
  };

  return renderHeader(props.route.params.screen);
};

export default SettingHeader;
