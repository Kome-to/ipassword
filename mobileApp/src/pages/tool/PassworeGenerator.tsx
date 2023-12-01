import {CopyIcon, RetryIcon, RightArrow} from '@common/assets/images/svg';
import {OptionToastSuccess} from '@common/assets/theme/common';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ModalNames} from '@common/constants';
import {GlobalState} from '@common/redux/rootReducer';
import Clipboard from '@react-native-clipboard/clipboard';
import Slider from '@react-native-community/slider';
import {closeModal} from '@services/common/actions';
import {passwordStrength} from 'check-password-strength';
import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Toast from 'react-native-root-toast';
import {useDispatch, useSelector} from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native';
import {generatePassword, strengthOptions} from './util';

const getStatusColor = (status) => {
  switch (status) {
    case 'average':
      return '255,204,0';
    case 'strong':
      return '153,204,51';
    case 'very_strong':
      return '51,153,0';
    default:
      return '255,204,0';
  }
};

const PasswordGenerator: React.FC = () => {
  const modalStatus = useSelector((state: GlobalState) => state.common.modals);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('very_strong');
  const [length, setLength] = useState(8);
  const [hasLowerCase, setHasLowerCase] = useState(true);
  const [hasUpperCase, setHasUpperCase] = useState(true);
  const [hasDigit, setHasDigit] = useState(true);
  const [hasSymbol, setHasSymbol] = useState(true);
  const [isShowHistory, setIsShowHistory] = useState(false);
  const passwordHistory = useRef<string[]>([]);

  const options = [
    {
      name: 'Ký tự viết thường (abc)',
      value: hasLowerCase,
      toggle: setHasLowerCase,
    },
    {name: 'Ký tự viết hoa', value: hasUpperCase, toggle: setHasUpperCase},
    {name: 'Số', value: hasDigit, toggle: setHasDigit},
    {
      name: 'Ký tự đặc biệt (!#$)',
      value: hasSymbol,
      toggle: setHasSymbol,
    },
  ];

  useEffect(() => {
    if (!hasLowerCase && !hasUpperCase && !hasDigit && !hasSymbol) {
      setHasLowerCase(true);
    } else {
      const password = generatePassword({
        hasLowerCase,
        hasUpperCase,
        hasDigit,
        hasSymbol,
        length,
      });
      if (password) {
        passwordHistory.current.push(password);
      }
      setPassword(password);
    }
  }, [hasLowerCase, hasUpperCase, hasDigit, hasSymbol, length]);

  return (
    <ReactNativeModal
      style={{
        width: '100%',
        backgroundColor: Colors.subPrimary,
        marginHorizontal: 0,
        marginVertical: 0,
      }}
      isVisible={modalStatus[ModalNames.PASSWORD_GENERATOR]}>
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{
            backgroundColor: `rgba(${getStatusColor(
              passwordStrength(password, strengthOptions).value,
            )}, 0.3)`,
            minHeight: 120,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 10,
              gap: 70,
            }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(closeModal(ModalNames.PASSWORD_GENERATOR));
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <RightArrow
                  style={{transform: [{rotate: '180deg'}]}}
                  width={30}
                  height={30}
                />
                <Text style={{fontSize: FontSize.xLarge, color: Colors.blue2}}>
                  Trở về
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={{fontSize: FontSize.smallXxLarge, color: Colors.text}}>
              Tạo mật khẩu
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginTop: 24,
                paddingHorizontal: 10,
                fontSize: FontSize.xxLarger,
                color: 'white',
                letterSpacing: 1.2,
              }}>
              {password}
            </Text>
            <View
              style={{
                paddingHorizontal: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: FontSize.xLarge,
                  color: `rgb(${getStatusColor(
                    passwordStrength(password, strengthOptions).value,
                  )})`,
                  fontWeight: '900',
                  letterSpacing: 1.2,
                }}>
                {`${
                  passwordStrength(password, strengthOptions).value ===
                  'average'
                    ? 'Trung bình'
                    : passwordStrength(password, strengthOptions).value ===
                        'strong'
                      ? 'Mạnh'
                      : 'Rất mạnh'
                }`}
              </Text>
              <View
                style={{
                  paddingHorizontal: 14,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    const password = generatePassword({
                      hasLowerCase,
                      hasUpperCase,
                      hasDigit,
                      hasSymbol,
                      length,
                    });
                    if (password) {
                      passwordHistory.current.push(password);
                    }
                    setPassword(password);
                  }}>
                  <RetryIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Clipboard.setString(password);
                    Toast.show(
                      'Sao chép mật khẩu thành công',
                      OptionToastSuccess,
                    );
                  }}>
                  <CopyIcon />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: 16,
                width: `${
                  passwordStrength(password, strengthOptions).value ===
                  'average'
                    ? '40%'
                    : passwordStrength(password, strengthOptions).value ===
                        'strong'
                      ? '60%'
                      : '100%'
                }`,
                backgroundColor: `rgb(${getStatusColor(
                  passwordStrength(password, strengthOptions).value,
                )})`,
                height: 3,
              }}
            />
          </View>
        </View>
        <View style={{marginVertical: 20, marginHorizontal: 10}}>
          <View>
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.text,
              }}>
              Độ dài mật khẩu: {length} ký tự
            </Text>
            <Slider
              style={{width: '100%', height: 40}}
              minimumValue={8}
              maximumValue={64}
              step={1}
              value={length}
              onValueChange={(n) => {
                setLength(n);
              }}
              minimumTrackTintColor={Colors.primary}
              maximumTrackTintColor={Colors.text}
            />
          </View>
          <View style={{marginTop: 20}}>
            {options.map((option) => (
              <View
                style={{
                  marginBottom: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
                key={option.name}>
                <Text
                  style={{
                    fontSize: FontSize.xLarge,
                    color: Colors.text,
                  }}>
                  {option.name}
                </Text>
                <ToggleSwitch
                  isOn={option.value}
                  onColor={Colors.primary}
                  offColor={Colors.gray}
                  size="medium"
                  onToggle={(isOn) => option.toggle(isOn)}
                  animationSpeed={100}
                />
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            borderColor: Colors.gray,
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderTopWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          {isShowHistory ? (
            <>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingRight: 20,
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: FontSize.xLarge,
                    color: Colors.gray,
                  }}>
                  Mới nhất
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setIsShowHistory(false);
                  }}>
                  <Text
                    style={{
                      fontSize: FontSize.xLarge,
                      color: Colors.blue3,
                    }}>
                    Ẩn
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={{maxHeight: 240}}>
                {passwordHistory.current.reverse().map((password, i) => (
                  <View
                    key={`${password}.${i}`}
                    style={{
                      backgroundColor: `rgba(${getStatusColor(
                        passwordStrength(password, strengthOptions).value,
                      )}, 0.3)`,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        width: '90%',
                        fontSize: FontSize.xLarge,
                        color: Colors.text,
                      }}>
                      {password}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        Clipboard.setString(password);
                        Toast.show(
                          'Sao chép mật khẩu thành công',
                          OptionToastSuccess,
                        );
                      }}>
                      <CopyIcon />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setIsShowHistory(!isShowHistory);
              }}>
              <Text
                style={{
                  fontSize: FontSize.xLarge,
                  color: Colors.blue3,
                }}>
                Xem lịch sử mật khẩu
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default PasswordGenerator;
