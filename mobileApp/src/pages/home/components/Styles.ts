import {Colors, FontSize} from '@common/assets/theme/variables';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  service: {
    display: 'flex',
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    borderTopWidth: 0.4,
    borderColor: Colors.gray,
    borderStyle: 'solid',
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: 'transparent',
  },
  serviceName: {
    color: Colors.text,
    fontSize: FontSize.xLarge,
    letterSpacing: 0.8,
  },
  textField: {
    borderBottomWidth: 1,
    borderColor: Colors.background,
    borderStyle: 'solid',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
