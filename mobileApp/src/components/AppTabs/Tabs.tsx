import {Text, View} from 'react-native';

import {GroupIcon, Home, Setting, Tool} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ScenesKey} from '@common/constants';
import Button from '@components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {setCurrentGroup, setFilter} from '@services/user/actions';
import {useDispatch} from 'react-redux';
import style from './TabStyles';

export interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export const TabBar = ({state}: TabBarProps) => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const tabs: {key: any; name: string; icon: any; iconFocus: any}[] = [
    {
      key: ScenesKey.HOME,
      name: 'Trang chủ',
      icon: <Home />,
      iconFocus: <Home fill={Colors.primary} />,
    },

    {
      key: ScenesKey.GROUP_TABS,
      name: 'Nhóm',
      icon: <GroupIcon />,
      iconFocus: <GroupIcon fill={Colors.primary} />,
    },

    {
      key: ScenesKey.TOOL,
      name: 'Công cụ',
      icon: <Tool />,
      iconFocus: <Tool stroke={Colors.primary} />,
    },

    {
      key: ScenesKey.SETTING_TABS,
      name: 'Cài đặt',
      icon: <Setting />,
      iconFocus: <Setting stroke={Colors.primary} />,
    },
  ];

  const onPress = (tab) => {
    if (tab.key === ScenesKey.GROUP_TABS) {
      navigation.navigate(tab.key, {screen: ScenesKey.GROUP});
    } else if (tab.key === ScenesKey.SETTING_TABS) {
      navigation.navigate(tab.key, {screen: ScenesKey.SETTING});
    } else {
      navigation.navigate(tab.key);
    }
    dispatch(setCurrentGroup(null));
    dispatch(setFilter(''));
  };

  return (
    <View style={style.tab}>
      {tabs.map((tab, i) =>
        state.index === i ? (
          <Button
            onPress={() => {
              onPress(tab);
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
              onPress(tab);
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
