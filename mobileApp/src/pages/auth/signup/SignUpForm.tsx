import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ScenesKey, TOKEN_STORAGE_KEY} from '@common/constants';
import {GlobalState} from '@common/redux/rootReducer';
import cryptography from '@common/utils/cryptography';
import Button from '@components/Button/Button';
import Logo from '@components/Logo/Logo';
import TextInputComponent, {InputType} from '@components/TextInput/TextInput';
import {gotoHome} from '@pages/verify-account/VerifyAccountNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLoading} from '@services/common/actions';
import {Formik, FormikProps} from 'formik';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import styles from './SignUpStyles';
import {UserRegisterParams} from '@common/api/apiTypes';
import api from '@common/api';
import axios from 'axios';
import Toast from 'react-native-root-toast';
import {OptionToast, OptionToastSuccess} from '@common/assets/theme/common';

const SignUpForm = ({
  onBack,
  type,
  onSwitch,
  navigation,
}): React.ReactElement => {
  const initialValues =
    type === 'LOGIN'
      ? {email: '', password: ''}
      : {email: '', password: '', confirmationPassword: ''};
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state: GlobalState) => state.common.loading);
  const schema =
    type === 'LOGIN'
      ? Yup.object().shape({
          email: Yup.string()
            .required('Vui lòng nhập email')
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không hợp lệ'),
          password: Yup.string()
            .required('Vui lòng nhập mật khẩu')
            .min(8, `Mật khẩu phải có ít nhất 8 ký tự`)
            .max(50, `Mật khẩu không được vứt quá 50 ký tự`)
            .matches(
              /^(?=.*[A-Z])/,
              'Mật khẩu phải có ít nhất một ký tự viết hoa',
            )
            .matches(
              /^(?=.*[a-z])/,
              'Mật khẩu phải có ít nhất một ký tự viết thường',
            )
            .matches(
              /^(?=.*[!@#$%^&*])/,
              'Mật khẩu phải có ít nhất một ký tự đặc biệt',
            )
            .matches(/^(?=.*[0-9])/, 'Mật khẩu phải có ít nhất một số'),
        })
      : Yup.object().shape({
          email: Yup.string()
            .required('Vui lòng nhập email')
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không hợp lệ'),
          password: Yup.string()
            .required('Vui lòng nhập mật khẩu')
            .min(8, `Mật khẩu phải có ít nhất 8 ký tự`)
            .max(50, `Mật khẩu không được vứt quá 50 ký tự`)
            .matches(
              /^(?=.*[A-Z])/,
              'Mật khẩu phải có ít nhất một ký tự viết hoa',
            )
            .matches(
              /^(?=.*[a-z])/,
              'Mật khẩu phải có ít nhất một ký tự viết thường',
            )
            .matches(
              /^(?=.*[!@#$%^&*])/,
              'Mật khẩu phải có ít nhất một ký tự đặc biệt',
            )
            .matches(/^(?=.*[0-9])/, 'Mật khẩu phải có ít nhất một số'),
          confirmationPassword: Yup.string()
            .required('Vui lòng nhập lại mật khẩu')
            .oneOf([Yup.ref('password')], 'Mật khẩu không khớp'),
        });

  const onLogin = async (values) => {
    try {
      dispatch(setLoading(true));

      const masterPasswordHash = await cryptography.getMasterPasswordHash(
        values.email,
        values.password,
      );
      const {data} = await api.user.login({masterPasswordHash});
      console.log(data);
      if (data?.token) {
        await AsyncStorage.setItem(
          TOKEN_STORAGE_KEY,
          JSON.stringify({Token: data?.token}),
        );
        Toast.show('Đăng nhập thành công', OptionToastSuccess);
        gotoHome(navigation);
      }
    } catch (e) {
      console.log(e.message);
      Toast.show('Email hoặc mật khẩu không đúng', OptionToast);

    } finally {
      dispatch(setLoading(false));
    }
  };

  const onRegister = async (values) => {
    try {
      dispatch(setLoading(true));
      console.log(values);
      const masterPassword = values.password;
      const email = values.email;
      const symmetricKey = await cryptography.createSymmetricKey();
      const rsaKeyPair = await cryptography.createRsaKeyPair();
      const masterKey = await cryptography.pbkdf2(masterPassword, values.email);
      const strengthMasterKey = cryptography.hkdfExpand(
        masterKey,
        email,
        'register',
      );
      const masterPasswordHash = await cryptography.pbkdf2(
        masterKey,
        masterPassword,
      );
      const protectedSymmetricKey = await cryptography.aesEncrypted(
        symmetricKey,
        strengthMasterKey,
      );
      const protectedRsaPrivateKey = await cryptography.aesEncrypted(
        rsaKeyPair.privateKey,
        symmetricKey,
      );
      console.log('Protected Rsa Private Key', protectedRsaPrivateKey);

      const params: UserRegisterParams = {
        email,
        masterPasswordHash,
        protectedSymmetricKey,
        protectedRsaPrivateKey,
        publicRsaKey: rsaKeyPair.publicKey,
      };

      const {data} = await api.user.register(params);

      if (data?.token) {
        Toast.show('Tạo tài khoản thành công.', OptionToastSuccess);
        await AsyncStorage.setItem(
          TOKEN_STORAGE_KEY,
          JSON.stringify({Token: data?.token}),
        );
        gotoHome(navigation);
      }
    } catch (e) {
      console.log(e.message);
      Toast.show('Có lỗi xảy ra vui lòng kiểm tra lại!', OptionToast);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView>
        <View
          style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo hiddenSubTitle />
        </View>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={type === ScenesKey.LOGIN ? onLogin : onRegister}
          validationSchema={schema}
          validateOnMount={true}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
          }: FormikProps<any>) => {
            return (
              <>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: Colors.white,
                    borderStyle: 'solid',
                    marginTop: 30,
                    marginBottom: 40,
                    borderRadius: 16,
                    paddingLeft: 14,
                    paddingRight: 14,
                    paddingBottom: 10,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: 50,
                      borderWidth: 1,
                      borderColor: Colors.white,
                      borderStyle: 'solid',
                      marginTop: 20,
                      marginBottom: 10,
                      borderRadius: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: 6,
                      paddingRight: 6,
                    }}>
                    <Button
                      onPress={onSwitch}
                      buttonContainerStyle={[
                        {...styles.tab},
                        type === ScenesKey.SIGN_UP ? styles.tabActive : {},
                      ]}>
                      <Text
                        style={{
                          color: Colors.text,
                          textAlign: 'center',
                          fontSize: FontSize.xLarge,
                        }}>
                        Đăng ký
                      </Text>
                    </Button>
                    <Button
                      onPress={onSwitch}
                      buttonContainerStyle={[
                        styles.tab,
                        type === ScenesKey.LOGIN ? styles.tabActive : {},
                      ]}>
                      <Text
                        style={{
                          color: Colors.text,
                          textAlign: 'center',
                          fontSize: FontSize.xLarge,
                        }}>
                        Đăng nhập
                      </Text>
                    </Button>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 340,
                    }}>
                    <View style={styles.field}>
                      <TextInputComponent
                        label="Email"
                        value={values.email}
                        handleChange={handleChange('email')}
                        error={errors.email}
                        touched={touched.email}
                        onFocus={() => {}}
                        inputType={InputType.WITH_VALIDATION}
                        labelStyles={styles.label}
                        handleBlur={handleBlur('email')}
                        placeholder="Nhập email"
                        placeholderTextColor={Colors.gray}
                        style={styles.input}
                        errorStyle={styles.error}
                        placeholderStyle={{opacity: 0.5}}
                        maxLength={50}
                      />
                    </View>
                    <View style={styles.field}>
                      <TextInputComponent
                        label="Mật khẩu"
                        value={values.password}
                        handleChange={handleChange('password')}
                        error={errors.password}
                        touched={touched.password}
                        onFocus={() => {}}
                        inputType={InputType.WITH_VALIDATION}
                        labelStyles={styles.label}
                        handleBlur={handleBlur('password')}
                        placeholder="Nhập mật khẩu"
                        placeholderStyle={{opacity: 0.5}}
                        placeholderTextColor={Colors.gray}
                        style={styles.input}
                        errorStyle={styles.error}
                        maxLength={50}
                        secureText={true}
                        containerStyles={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        isSecureText={hidePassword}
                      />
                    </View>
                    {type !== 'LOGIN' && (
                      <View style={styles.field}>
                        <TextInputComponent
                          label="Nhập lại khẩu"
                          value={values.confirmationPassword}
                          handleChange={handleChange('confirmationPassword')}
                          error={errors.confirmationPassword}
                          touched={touched.confirmationPassword}
                          onFocus={() => {}}
                          inputType={InputType.WITH_VALIDATION}
                          labelStyles={styles.label}
                          handleBlur={handleBlur('confirmationPassword')}
                          placeholder="Nhập lại mật khẩu"
                          placeholderStyle={{opacity: 0.5}}
                          placeholderTextColor={Colors.gray}
                          style={styles.input}
                          errorStyle={styles.error}
                          maxLength={50}
                          secureText={true}
                          containerStyles={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                          isSecureText={hideConfirmPassword}
                        />
                      </View>
                    )}
                  </View>
                </View>
                <Button
                  onPress={() => {
                    handleSubmit();
                  }}
                  disabled={!isValid}
                  buttonContainerStyle={[
                    {
                      backgroundColor: Colors.primary,
                    },
                  ]}>
                  <Text
                    style={{color: Colors.text, fontSize: FontSize.xxLarger}}>
                    {type === ScenesKey.LOGIN ? (
                      <Text
                        style={{
                          color: Colors.text,
                          fontSize: FontSize.xxLarger,
                        }}>
                        Đăng nhập
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: Colors.text,
                          fontSize: FontSize.xxLarger,
                        }}>
                        Đăng ký
                      </Text>
                    )}
                  </Text>
                </Button>
              </>
            );
          }}
        </Formik>
        <Text
          style={{
            color: Colors.text,
            fontSize: FontSize.xLarge,
            textAlign: 'center',
            marginTop: 20,
            letterSpacing: 1,
            textDecorationLine: 'underline',
          }}
          onPress={onBack}>
          Quay lại
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUpForm;
