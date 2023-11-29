import {CardIcon, NoteIcon, PasswordIcon} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import Button from '@components/Button/Button';
import React from 'react';
import {Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const OptionsModal = ({isVisible, onToggle, onAdd}): React.ReactElement => {
  const options = [
    {key: 'password', name: 'Mật khẩu', icon: <PasswordIcon />},
    {key: 'note', name: 'Ghi chú', icon: <NoteIcon />},
    {key: 'card', name: 'Thẻ ngân hàng', icon: <CardIcon />},
  ];

  return (
    <ReactNativeModal
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        marginHorizontal: 0,
        marginVertical: 0,
        width: '100%',
        height: '100%',
      }}
      isVisible={isVisible}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
          }}>
          <Button
            buttonContainerStyle={{
              backgroundColor: 'transparent',
              left: 0,
              position: 'absolute',
            }}
            onPress={onToggle}>
            <Text
              style={{
                color: Colors.blue3,
                fontSize: FontSize.xLarge,
                paddingLeft: 20,
              }}>
              Hủy
            </Text>
          </Button>
          <Text
            style={{
              color: Colors.text,
              fontSize: FontSize.smallXxLarge,
              fontWeight: '900',
            }}>
            Thêm
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.subPrimary,
            width: '92%',
            marginHorizontal: '4%',
            borderRadius: 10,
            marginTop: 20,
          }}>
          {options.map((option, i) => (
            <Button
              buttonContainerStyle={{
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 20,
                paddingHorizontal: 20,
                paddingVertical: 14,
                borderBottomWidth: 1,
                borderColor:
                  i !== options.length - 1 ? Colors.gray : 'transparent',
                borderStyle: 'solid',
              }}
              key={option.name}
              onPress={() => {
                onToggle();
                onAdd(option.key);
              }}>
              {option.icon}
              <Text
                style={{
                  width: '100%',
                  color: Colors.text,
                  fontSize: FontSize.smallXxLarge,
                }}>
                {option.name}
              </Text>
            </Button>
          ))}
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default OptionsModal;
