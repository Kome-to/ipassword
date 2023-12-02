import {Colors, FontSize} from '@common/assets/theme/variables';
import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ReactNativePinView from 'react-native-pin-view';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Advance: React.FC = () => {
  const pinView = useRef<any>(null);

  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 8) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);

  return (
    <View style={{marginHorizontal: 10}}>
      <View
        style={{
          backgroundColor: Colors.subPrimary,
          marginBottom: 20,
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}>
        <ReactNativePinView
          inputSize={32}
          // @ts-ignore: Unreachable code error
          ref={pinView}
          pinLength={4}
          buttonSize={60}
          onValueChange={(value) => setEnteredPin(value)}
          buttonAreaStyle={{
            marginTop: 24,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#FFF',
          }}
          inputViewFilledStyle={{
            backgroundColor: '#FFF',
          }}
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: '#FFF',
          }}
          buttonTextStyle={{
            color: '#FFF',
          }}
          onButtonPress={(key) => {
            if (key === 'custom_left') {
              pinView.current.clear();
            }
            if (key === 'custom_right') {
              alert('Entered Pin: ' + enteredPin);
            }
            if (key === 'three') {
              alert('You just click to 3');
            }
          }}
          customLeftButton={
            (showRemoveButton ? (
              <Icon name={'ios-backspace'} size={36} color={'#FFF'} />
            ) : undefined) as any
          }
          customRightButton={
            (showCompletedButton ? (
              <Icon name={'ios-unlock'} size={36} color={'#FFF'} />
            ) : undefined) as any
          }
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 10,
            alignItems: 'center',
          }}>
          <View style={{width: '86%', paddingRight: 10}}>
            <Text
              style={{
                color: Colors.text,
                fontSize: FontSize.large,
                marginBottom: 4,
              }}>
              Khóa iPassword
            </Text>
            <Text>Yêu cầu mã PIN mỗi lần mở ứng dụng</Text>
          </View>
          <ToggleSwitch
            isOn={true}
            onColor={Colors.primary}
            offColor={Colors.gray}
            size="medium"
            onToggle={(isOn) => {}}
            animationSpeed={100}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.subPrimary,
          marginBottom: 20,
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 10,
            alignItems: 'center',
          }}>
          <View style={{width: '86%', paddingRight: 10}}>
            <Text
              style={{
                color: Colors.text,
                fontSize: FontSize.large,
                marginBottom: 4,
              }}>
              Xác thực 2 lớp
            </Text>
            <Text>
              Thêm hình thức xác nhận để bảo vệ tài khoản của bạn khi đăng nhập
            </Text>
          </View>
          <ToggleSwitch
            isOn={true}
            onColor={Colors.primary}
            offColor={Colors.gray}
            size="medium"
            onToggle={(isOn) => {}}
            animationSpeed={100}
          />
        </View>
      </View>

      <TouchableOpacity>
        <Text
          style={{
            color: Colors.red,
            fontSize: FontSize.large,
            marginBottom: 4,
            marginTop: 20,
            textAlign: 'center',
          }}>
          Xóa tài khoản
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Advance;
