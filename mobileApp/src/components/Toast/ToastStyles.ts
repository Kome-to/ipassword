import {StyleSheet} from 'react-native';
import {FontSize} from '@common/assets/theme/variables';
import {isIOS} from '@common/utils/detectPlatform';

export default StyleSheet.create({
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginTop: isIOS ? 5 : 0,
    height: '100%',
    width: 40,
    minHeight: 40,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {justifyContent: 'center', marginTop: isIOS ? 5 : 0},
  message: {
    marginHorizontal: 5,
    fontSize: FontSize.small,
    marginTop: isIOS ? 5 : 0,
  },
  undoButton: {
    width: 40,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isIOS ? 5 : 0,
  },
  undo: {
    fontSize: FontSize.small,
    textAlignVertical: 'center',
  },
});
