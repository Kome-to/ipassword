export enum ScenesKey {
  INIT = 'INIT',
  APP = 'APP',
  START = 'START',
  AUTH = 'AUTH',
  LOGIN = 'LOGIN',
  SIGN_UP = 'SIGN_UP',
  HOME = 'HOME',
  GROUP = 'GROUP',
  GROUP_TABS = 'GROUP_TABS',
  GROUP_DETAIL = 'GROUP_DETAIL',
  TOOL = 'TOOL',
  SETTING = 'SETTING',
  SETTING_ACCOUNT = 'SETTING_ACCOUNT',
  SETTING_POLICY = 'SETTING_POLICY',
  SETTING_CHANGE_PASS = 'SETTING_CHANGE_PASS',
  SETTING_TABS = 'SETTING_TABS',
  SETTING_ADVANCE = 'SETTING_ADVANCE',
  TOOL_TABS = 'TOOL_TABS',
  ANALYSIS = 'ANALYSIS',
  PASSWORD_REQUIRE = 'PASSWORD_REQUIRE',
}
export const ToastDuration = 4000;

export const TOKEN_STORAGE_KEY = 'I_PASSWORD_USER_TOKEN';
export const SYMMETRIC_KEY = 'SYMMETRIC_KEY';

export const ImageUrls = {
  BACKGROUND: require('@common/assets/images/background.png'),
  FACEBOOk: require('@common/assets/images/facebook.png'),
  GOOGLE: require('@common/assets/images/google.png'),
  TWITTER: require('@common/assets/images/twitter.png'),
  AMAZON: require('@common/assets/images/amazon.png'),
  LINKEDLN: require('@common/assets/images/linkedln.png'),
  DROPBOX: require('@common/assets/images/dropbox.png'),
  SHOPEE: require('@common/assets/images/shopee.png'),
  LAZADA: require('@common/assets/images/lazada.png'),
  PIXIV: require('@common/assets/images/pixiv.png'),
  EBAY: require('@common/assets/images/ebay.png'),
  LOCK: require('@common/assets/images/lock.png'),
  NOTE: require('@common/assets/images/note.jpg'),
  CARD: require('@common/assets/images/card.jpg'),
};

export const AppConstants = {
  API_URL: 'http://10.0.2.2:4044',
};

export const ModalNames = {
  PASSWORD_GENERATOR: 'PASSWORD_GENERATOR',
  ANALYSIS: 'ANALYSIS',
};
