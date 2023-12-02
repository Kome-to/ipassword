import {StyleSheet} from 'react-native';
import {
  isIphoneX,
  isAndroid,
  isIOS,
} from '../../../common/utils/detectPlatform';
import {ToastDuration} from '@common/constants';
import {Colors, FontSize, SCREEN_WIDTH} from './variables';
import Toast, {ToastOptions} from 'react-native-root-toast';

export default StyleSheet.create({
  elementDisable: {
    opacity: 0.5,
  },
  flex1: {
    flex: 1,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  mt50: {
    marginTop: 50,
  },
  ml8: {
    marginLeft: 8,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  mx5: {
    marginHorizontal: 5,
  },
  mx10: {
    marginHorizontal: 10,
  },
  pr15: {
    paddingRight: 15,
  },
  pr20: {
    paddingRight: 20,
  },
  pr40: {
    paddingRight: 40,
  },
  px20: {
    paddingHorizontal: 20,
  },
  py5: {
    paddingVertical: 5,
  },
  py15: {
    paddingVertical: 15,
  },
  py20: {
    paddingVertical: 20,
  },
  my10: {
    marginVertical: 10,
  },
  my15: {
    marginVertical: 15,
  },
  backBtn: {
    minWidth: 60,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRightBtn: {
    minWidth: 60,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexColumnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  flexRowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textDefault: {
    paddingBottom: 18,
  },
  paddingTopHeader: {paddingTop: isIphoneX() ? 32 : isAndroid ? 0 : 20},
  heightHeader: {
    minHeight: 50,
  },
  paddingTopAndroid: {
    paddingTop: 20,
  },
  paddingTopLandscape: {
    paddingTop: 0,
  },
  shadow: {
    elevation: 5,
    shadowOffset: {width: 2, height: 2},
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  borderTop1: {
    borderTopWidth: 1,
  },

  // header common styles
  headerTitle: {
    paddingLeft: 10,
    color: Colors.blackTitle,
    fontSize: FontSize.medium,
    lineHeight: 19,
  },
  subHeaderTitle: {
    paddingLeft: 10,
    color: Colors.veryLightGrey1,
    fontSize: FontSize.small,
  },
  headerStyles: {
    paddingTop: 0,
    paddingHorizontal: 15,
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderColor: Colors.veryLightGrey,
    backgroundColor: Colors.white,
  },
  headerText: {
    color: Colors.black,
    fontSize: FontSize.medium,
  },
  headerButton: {
    backgroundColor: Colors.lightMainBlue,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 8,
  },
  selectBtnLabel: {
    color: Colors.white,
    fontSize: FontSize.normal,
    textAlignVertical: 'center',
  },

  // header bin common styles
  styleHeader: {
    paddingTop: 0,
    justifyContent: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderColor: Colors.grey5,
  },
  leftTabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBinHeader: {
    color: Colors.black,
    fontSize: FontSize.medium,
  },
  btnHeader: {
    backgroundColor: Colors.lightMainBlue,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 8,
  },
  txtSelect: {
    color: Colors.white,
    fontSize: FontSize.normal,
    textAlignVertical: 'center',
  },
  description: {
    fontSize: FontSize.small,
    paddingHorizontal: 15,
    color: Colors.lightGrey,
    paddingTop: 10,
    paddingBottom: 12,
  },

  // footer bin common styles
  actionsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: Colors.monotone7,
    borderTopWidth: 1,
    borderColor: Colors.veryLightGrey,
  },
  actions: {flexDirection: 'row', paddingHorizontal: 30},
  actionsIcon: {justifyContent: 'center'},
  txtRestore: {
    color: Colors.infoIcon,
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlignVertical: 'center',
    paddingLeft: 5,
    fontSize: isIOS ? FontSize.large : FontSize.normal,
  },
  txtDelete: {
    color: Colors.errorIcon,
    paddingLeft: 5,
    fontSize: isIOS ? FontSize.large : FontSize.normal,
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlignVertical: 'center',
  },
  confirmModal: {width: SCREEN_WIDTH - 30, marginHorizontal: 15},

  // action button styles
  cancelBtn: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.grey3,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  cancelBtnLabel: {
    textAlignVertical: 'center',
    color: Colors.brightGrey,
    fontSize: FontSize.normal,
  },
  deleteBtn: {
    backgroundColor: Colors.mainRedBlood,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  deleteBtnLabel: {
    textAlignVertical: 'center',
    color: Colors.white,
    fontSize: FontSize.normal,
  },
  restoreBtn: {
    backgroundColor: Colors.infoIcon,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  restoreBtnLabel: {
    textAlignVertical: 'center',
    color: Colors.white,
    fontSize: FontSize.normal,
  },
  confirmBtn: {
    backgroundColor: Colors.mainGreen,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  confirmBtnLabel: {
    textAlignVertical: 'center',
    color: Colors.white,
    fontSize: FontSize.normal,
  },
  warningBtn: {
    backgroundColor: Colors.warningIcon,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  warningBtnLabel: {
    textAlignVertical: 'center',
    color: Colors.white,
    fontSize: FontSize.normal,
  },
});

export const OptionToast = {
  position: Toast.positions.BOTTOM,
  shadow: true,
  animation: true,
  hideOnPress: true,
  delay: 0,
  backgroundColor: Colors.redOrange,
  duration: 6000,
};

export const OptionToastSuccess: ToastOptions = {
  position: Toast.positions.BOTTOM,
  shadow: false,
  animation: true,
  hideOnPress: true,
  delay: 0,
  duration: 2000,
  containerStyle: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: SCREEN_WIDTH - 40,
  },
  textColor: Colors.white,
  backgroundColor: Colors.green1,
  textStyle: {fontSize: FontSize.large},
};

export const OptionToast2: ToastOptions = {
  position: Toast.positions.BOTTOM,
  shadow: false,
  animation: true,
  hideOnPress: true,
  delay: 0,
  duration: ToastDuration,
  containerStyle: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: SCREEN_WIDTH - 40,
  },
  textColor: Colors.black,
  textStyle: {fontSize: FontSize.small},
  opacity: 1,
};

export const OptionToastRed: ToastOptions = {
  position: Toast.positions.BOTTOM,
  shadow: false,
  animation: true,
  hideOnPress: true,
  delay: 0,
  duration: 2000,
  containerStyle: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: SCREEN_WIDTH - 40,
  },
  textColor: Colors.white,
  backgroundColor: Colors.red,
  textStyle: {fontSize: FontSize.large},
};
