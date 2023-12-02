import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {Colors} from '@common/assets/theme/variables';
import Button from '@components/Button/Button';
import TextInputComponent from '@components/TextInput/TextInput';
import {selectCurrentUser} from '@services/user/selector';
import {Formik, FormikProps} from 'formik';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const style = StyleSheet.create({
  field: {
    marginBottom: 22,
    marginHorizontal: 10,
  },

  label: {
    fontSize: 18,
    color: Colors.gray,
    marginBottom: 10,
  },
  input: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    width: '100%',
    backgroundColor: Colors.subPrimary,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    borderRadius: 10,
  },
});

const SettingAccount: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);

  const initialValues = {
    phone: currentUser?.phone || '',
    firstName: currentUser?.firstName || '',
    lastName: currentUser?.lastName || '',
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <View>
      <KeyboardAwareScrollView>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={null}
          validateOnMount={true}>
          {({
            isValid,
            values,
            handleChange,
            handleSubmit, //
            // errors,
          } // touched,
          // ,
          // handleBlur,
          // ,
          // ,
          : FormikProps<any>) => {
            return (
              <View>
                <View style={style.field}>
                  <Text style={style.label}>Email</Text>
                  <Text style={style.input}>{currentUser.email}</Text>
                </View>
                <View style={style.field}>
                  <TextInputComponent
                    value={values.firstName}
                    handleChange={handleChange('firstName')}
                    label="Họ"
                    labelStyles={{...style.label}}
                    style={style.input}
                  />
                </View>
                <View style={style.field}>
                  <TextInputComponent
                    value={values.lastName}
                    handleChange={handleChange('lastName')}
                    label="Tên"
                    style={style.input}
                    labelStyles={{...style.label}}
                  />
                </View>
                <View style={style.field}>
                  <TextInputComponent
                    keyboardType="numeric"
                    value={values.phone}
                    label="Số điện thoại"
                    handleChange={handleChange('phone')}
                    style={style.input}
                    labelStyles={{...style.label}}
                  />
                </View>
                <Button
                  buttonContainerStyle={{
                    backgroundColor: Colors.primary,
                    marginHorizontal: 10,
                  }}
                  onPress={() => {
                    handleSubmit();
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '700',
                      color: Colors.text,
                    }}>
                    Lưu
                  </Text>
                </Button>
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SettingAccount;
