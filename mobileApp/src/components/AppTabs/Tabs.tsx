import {Text, View} from 'react-native';

import style from './TabStyles';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {Group, Home, Setting, Tool} from '@common/assets/images/svg';
import Button from '@components/Button/Button';
import {ScenesKey} from '@common/constants';
import {useNavigation, useRoute} from '@react-navigation/native';

export interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export const TabBar = ({state}: TabBarProps) => {
  const navigation: any = useNavigation();
  const route = useRoute();

  const tabs: {key: any; name: string; icon: any; iconFocus: any}[] = [
    {
      key: ScenesKey.HOME,
      name: 'Trang chủ',
      icon: <Home />,
      iconFocus: <Home fill={Colors.primary} />,
    },

    {
      key: ScenesKey.GROUP,
      name: 'Nhóm',
      icon: <Group />,
      iconFocus: <Group fill={Colors.primary} />,
    },

    {
      key: ScenesKey.TOOL,
      name: 'Công cụ',
      icon: <Tool />,
      iconFocus: <Tool stroke={Colors.primary} />,
    },

    {
      key: ScenesKey.SETTING,
      name: 'Cài đặt',
      icon: <Setting />,
      iconFocus: <Setting stroke={Colors.primary} />,
    },
  ];

  return (
    <View style={style.tab}>
      {tabs.map((tab, i) =>
        state.index === i ? (
          <Button
            onPress={() => {
              navigation.navigate(tab.key);
            }}
            key={tab.name}
            buttonContainerStyle={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              gap: 6,
            }}>
            {tab.iconFocus}
            <Text
              style={{
                color: Colors.primary,
                fontSize: FontSize.mediumNormal,
                textAlign: 'center',
              }}>
              {tab.name}
            </Text>
          </Button>
        ) : (
          <Button
            onPress={() => {
              navigation.navigate(tab.key);
            }}
            key={tab.name}
            buttonContainerStyle={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              gap: 6,
            }}>
            {tab.icon}
            <Text
              style={{
                color: Colors.gray,
                fontSize: FontSize.mediumNormal,
                textAlign: 'center',
              }}>
              {tab.name}
            </Text>
          </Button>
        ),
      )}
    </View>
  );
};
