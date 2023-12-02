import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import Button from '@components/Button/Button';
import TextInputComponent, {InputType} from '@components/TextInput/TextInput';
import {Formik, FormikProps} from 'formik';
import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import styles from '../auth/signup/SignUpStyles';
import {FontSize} from '@common/assets/theme/variables';

const ChangePassword: React.FC = () => {
  return (
    <View>
      <KeyboardAwareScrollView>
        <Formik
          enableReinitialize={true}
          initialValues={{}}
          onSubmit={() => {}}
          validationSchema={null}
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
                    marginHorizontal: 10,
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
                      height: 340,
                    }}>
                    <View style={styles.field}>
                      <TextInputComponent
                        label="Mật khẩu hiện tại"
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
                        isSecureText={true}
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
                        isSecureText={true}
                      />
                    </View>
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
                        isSecureText={true}
                      />
                    </View>
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
                    <Text
                      style={{
                        color: Colors.text,
                        fontSize: FontSize.xxLarger,
                      }}>
                      Thay đổi mật khẩu
                    </Text>
                  </Text>
                </Button>
              </>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ChangePassword;
