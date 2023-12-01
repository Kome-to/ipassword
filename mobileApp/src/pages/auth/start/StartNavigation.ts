import {ScenesKey} from '@common/constants';
import {NavigationProps} from '@common/types';

export const goToStart = (navigation: NavigationProps) => {
  navigation.reset({
    index: 0,
    routes: [{name: ScenesKey.START}],
  });
};

export const goToAuth = (navigation: NavigationProps) => {
  navigation.reset({
    index: 0,
    routes: [{name: ScenesKey.AUTH}],
  });
};

export const goToPasswordRequire = (navigation: NavigationProps) => {
  navigation.reset({
    index: 0,
    routes: [{name: ScenesKey.AUTH}, {name: ScenesKey.PASSWORD_REQUIRE}],
  });
};
