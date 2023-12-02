import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';

import {Colors} from '@common/assets/theme/variables';
import {ScenesKey} from '@common/constants';
import {NavigationProps} from '@common/types';
import {getTokenStorage} from '@common/utils/storage';
import {TabBar} from '@components/AppTabs/Tabs';
import SignUp from '@pages/auth/signup/SignUp';
import Start from '@pages/auth/start/Start';
import {goToStart} from '@pages/auth/start/StartNavigation';
import Group from '@pages/group/Group';
import GroupHeader from '@pages/group/GroupHeader';
import GroupDetail from '@pages/group/components/GroupDetail';
import {Home} from '@pages/home/Home';
import HomeHeader from '@pages/home/HomeHeader';
import ChangePassword from '@pages/setting/ChangePassword';
import Policy from '@pages/setting/Policy';
import Setting from '@pages/setting/Setting';
import SettingAccount from '@pages/setting/SettingAccount';
import SettingHeader from '@pages/setting/SettingHeader';
import Tool from '@pages/tool/Tool';
import ToolHeader from '@pages/tool/ToolHeader';
import {gotoHome} from '@pages/verify-account/VerifyAccountNavigation';
import {navigationRef} from 'RootNavigator';
import Advance from '@pages/setting/Advance';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

interface InitProps {
  route: NavigationProps;
  navigation: NavigationProps;
}

const Init = ({navigation}: InitProps) => {
  const getTokenFromStorage = async () => {
    const tokenStorage = await getTokenStorage();
    console.log('Token', tokenStorage);

    if (tokenStorage !== null) {
      gotoHome(navigation);
    } else {
      goToStart(navigation);
    }
  };

  useEffect(() => {
    getTokenFromStorage();
  }, []);

  return <></>;
};

const GroupTabs = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScenesKey.GROUP}>
      <Stack.Screen name={ScenesKey.GROUP} component={Group} />
      <Stack.Screen name={ScenesKey.GROUP_DETAIL} component={GroupDetail} />
    </Stack.Navigator>
  );
};

const SettingTabs = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScenesKey.SETTING}>
      <Stack.Screen name={ScenesKey.SETTING} component={Setting} />
      <Stack.Screen
        name={ScenesKey.SETTING_ACCOUNT}
        component={SettingAccount}
      />
      <Stack.Screen
        name={ScenesKey.SETTING_CHANGE_PASS}
        component={ChangePassword}
      />
      <Stack.Screen name={ScenesKey.SETTING_ADVANCE} component={Advance} />
      <Stack.Screen name={ScenesKey.SETTING_POLICY} component={Policy} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScenesKey.HOME}
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        options={{
          header: (props) => <HomeHeader {...props} />,
        }}
        name={ScenesKey.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          header: (props) => <GroupHeader {...props} />,
        }}
        name={ScenesKey.GROUP_TABS}
        component={GroupTabs}
      />
      <Tab.Screen
        options={{
          header: (props) => <ToolHeader {...props} />,
        }}
        name={ScenesKey.TOOL}
        component={Tool}
      />
      <Tab.Screen
        options={{
          header: (props) => <SettingHeader {...props} />,
        }}
        name={ScenesKey.SETTING_TABS}
        component={SettingTabs}
      />
    </Tab.Navigator>
  );
};

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScenesKey.SIGN_UP}>
      <Stack.Screen name={ScenesKey.SIGN_UP} component={SignUp} />
      {/* <Stack.Screen name={ScenesKey.LOGIN} component={SignUp} /> */}
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        customAnimationOnGesture: false,
      }}
      initialRouteName={ScenesKey.INIT}>
      <Stack.Screen name={ScenesKey.INIT} component={Init} />
      <Stack.Screen name={ScenesKey.START} component={Start} />
      <Stack.Screen options={{}} name={ScenesKey.AUTH} component={Auth} />
      <Stack.Screen name={ScenesKey.APP} component={App} />
    </Stack.Navigator>
  );
};

const theme = (mode: 'dark' | 'light') => {
  const colors = {
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.primary,
    text: Colors.text,
    border: Colors.primary,
    notification: Colors.primary,
  };
  return {
    dark: mode === 'dark',
    colors,
  };
};

const Navigator = (): React.ReactElement => {
  return (
    <NavigationContainer theme={theme('dark')} ref={navigationRef}>
      <Main />
    </NavigationContainer>
  );
};

export default Navigator;
