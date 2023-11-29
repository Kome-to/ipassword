import {StyleSheet} from 'react-native';
import {Colors, FontSize} from '@common/assets/theme/variables';

export default StyleSheet.create({
  lineActive: {
    backgroundColor: Colors.white,
  },
  tabActive: {backgroundColor: Colors.primary},
  tab: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  input: {
    flex: 1,
    width: '90%',
    paddingHorizontal: 15,
    height: 46,
    borderColor: Colors.text,
    borderWidth: 1,
    borderRadius: 10,
    color: Colors.text,
    fontSize: FontSize.medium,
    marginBottom: 20,
  },
  field: {
    marginTop: 10,
  },
  label: {
    color: Colors.text,
    fontSize: FontSize.xLarge,
    marginBottom: 10,
  },
  error: {
    marginTop: 44,
  },
  line: {
    height: 6,
    flex: 1,
    backgroundColor: Colors.subPrimary,
    borderWidth: 1,
    borderColor: Colors.white,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  button: {
    height: 60,
  },
  buttonText: {
    fontSize: FontSize.xxLarger,
  },
  icon: {
    position: 'absolute',
    top: '5%',
    left: '-1%',
  },
});
