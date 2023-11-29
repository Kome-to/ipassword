import {ScenesKey} from '@common/constants';
import {NavigationProps} from '@common/types';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {
  LinearBox,
  LinearBoxOverlap,
  ShieldTick,
  ShieldTickOverlap,
} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import Button from '@components/Button/Button';
import Logo from '@components/Logo/Logo';
import SignUpForm from './SignUpForm';
import styles from './SignUpStyles';

interface SignUpProps {
  navigation: NavigationProps;
  //   route: RouteNavigationProps;
}

const SignUp = ({navigation}: SignUpProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((pre) => (pre + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const gotoLoginScreen = () => {
    setIsLogin(true);
  };

  const goBack = () => {
    setCurrentStep(0);
    setIsLogin(false);
    setIsRegister(false);
  };

  const onSwitch = () => {
    setIsLogin(isRegister);
    setIsRegister(isLogin);
  };

  const steps = [
    {
      id: 0,
      title: 'Bảo mật',
      subTitle: 'Kiểm soát bảo mật',
      description: 'Mọi thứ đều được mã hóa và bảo mật 100% dữ liệu của bạn',
    },
    {
      id: 1,
      title: 'Thuận tiện',
      subTitle: 'Mọi thứ trong một lần chạm',
      description:
        'Thêm, tạo, lưu trữ, chuyển đổi, đồng bộ, sao chép tất cả mật khẩu của bạn chỉ với một lần chạm. Tự động điền mà không cần phải mở ứng dụng.',
    },
    {
      id: 2,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      {isLogin ? (
        <SignUpForm
          navigation={navigation}
          type={ScenesKey.LOGIN}
          onBack={goBack}
          onSwitch={onSwitch}
        />
      ) : isRegister ? (
        <SignUpForm
          navigation={navigation}
          type={ScenesKey.SIGN_UP}
          onBack={goBack}
          onSwitch={onSwitch}
        />
      ) : (
        <>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              gap: 24,
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 30,
            }}>
            {steps.map((step) => (
              <View
                key={step.id}
                style={
                  currentStep >= step.id
                    ? {...styles.line, ...styles.lineActive}
                    : {...styles.line}
                }
              />
            ))}
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 60,
              marginBottom: 40,
              height: 220,
            }}>
            {currentStep === 0 && (
              <>
                <View
                  style={{
                    position: 'relative',
                  }}>
                  <ShieldTickOverlap style={{...styles.icon}} />
                  <ShieldTick />
                </View>
              </>
            )}
            {currentStep === 1 && (
              <>
                <View
                  style={{
                    position: 'relative',
                  }}>
                  <LinearBoxOverlap style={{...styles.icon}} />
                  <LinearBox />
                </View>
              </>
            )}
            {currentStep === 2 && <Logo />}
          </View>
          <View style={{width: '100%', height: 240}}>
            {steps[currentStep].title && (
              <>
                <Text style={{color: Colors.text, fontSize: FontSize.xxLarger}}>
                  {steps[currentStep].title}
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.text,
                    width: 50,
                    height: 2,
                    marginTop: 4,
                    marginBottom: 10,
                  }}
                />
              </>
            )}
            {steps[currentStep].subTitle && (
              <Text
                style={{
                  color: Colors.text,
                  fontSize: FontSize.xxxLarger,
                  fontWeight: '700',
                  marginBottom: 20,
                }}>
                {steps[currentStep].subTitle}
              </Text>
            )}
            {steps[currentStep].description && (
              <Text
                style={{
                  color: Colors.text,
                  fontSize: FontSize.medium,
                  marginBottom: 10,
                  letterSpacing: 1,
                  lineHeight: 24,
                }}>
                {steps[currentStep].description}
              </Text>
            )}
          </View>
          <View
            style={{
              display: 'flex',
              gap: 24,
              marginTop: 40,
            }}>
            <Button
              buttonContainerStyle={{
                ...styles.button,
                backgroundColor: Colors.primary,
              }}
              onPress={() => {
                setIsRegister(true);
              }}>
              <Text style={{...styles.buttonText, color: Colors.white}}>
                Đăng ký
              </Text>
            </Button>
            <Button
              buttonContainerStyle={{
                ...styles.button,
                backgroundColor: Colors.white,
                borderWidth: 2,
                borderColor: Colors.subPrimary,
                borderStyle: 'solid',
              }}
              onPress={gotoLoginScreen}>
              <Text style={{...styles.buttonText, color: Colors.black}}>
                Đã có tài khoản
              </Text>
            </Button>
          </View>
        </>
      )}
    </View>
  );
};

export default SignUp;
