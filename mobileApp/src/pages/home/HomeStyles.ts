import {Colors, FontSize} from '@common/assets/theme/variables';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  filterActive: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: Colors.primary,
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: Colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 4,
    paddingVertical: 0,
    gap: 4,
    height: 30,
  },
  title: {
    fontSize: FontSize.xxxLarger,
    color: Colors.text,
    fontWeight: '800',
  },
});
