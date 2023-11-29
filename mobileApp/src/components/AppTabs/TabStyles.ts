import {Colors} from '@common/assets/theme/variables';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tab: {
    backgroundColor: Colors.subPrimary,
    height: 68,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
