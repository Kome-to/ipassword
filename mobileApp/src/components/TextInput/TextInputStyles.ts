import {StyleSheet} from 'react-native';
import {Colors, FontSize} from '@common/assets/theme/variables';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  asterisk: {color: Colors.red, fontSize: FontSize.normal},
  label: {},
  textInput: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    paddingRight: 8,
  },
  textInputError: {},
  touchableEye: {
    position: 'absolute',
    right: 0,
    top: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  unit: {
    position: 'absolute',
    right: 0,
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  iconEye: {},
  labelInput: {
    paddingBottom: 10,
    color: Colors.gray,
    fontSize: FontSize.normal,
  },
  errText: {position: 'absolute', top: 40, color: Colors.red},
});
