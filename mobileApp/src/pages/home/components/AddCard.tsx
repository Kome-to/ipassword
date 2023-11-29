import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import api from '@common/api';
import {AttachIcon, Eye, EyeSlash, NoteIcon} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ImageUrls} from '@common/constants';
import Button from '@components/Button/Button';
import {setLoading} from '@services/common/actions';
import {setNotes} from '@services/user/actions';
import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, View, TouchableOpacity} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import style from './Styles';

const AddCard = ({isVisible, onClose}): React.ReactElement => {
  const [canSave, setCanSave] = useState(false);
  const [isAttach, setIsAttach] = useState(false);
  const [hideNumber, setHideNumber] = useState(true);
  const [hideCode, setHideCode] = useState(true);
  const [values, setValues] = useState({
    displayName: '',
    cardholderName: '',
    numbers: '',
    brand: '',
    expirationDate: '',
    securityCode: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setCanSave(
      !!(
        values.displayName &&
        values.cardholderName &&
        values.numbers &&
        values.brand &&
        values.expirationDate &&
        values.securityCode
      ),
    );
  }, [values]);

  const getUserData = async () => {
    try {
      const {data} = await api.user.getData();
      dispatch(setNotes([...data.notes]));
    } catch (e) {
      console.log(e);
    }
  };

  const onCreateNote = async (values) => {
    try {
      dispatch(setLoading(true));
      console.log(values);
      const {data} = await api.user.createNote(values);
      console.log(data);
      await getUserData();
      onClose();
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ReactNativeModal
      swipeDirection="right"
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        marginHorizontal: 0,
        marginVertical: 0,
        width: '100%',
        height: '100%',
      }}
      isVisible={isVisible}>
      <KeyboardAwareScrollView>
        <View
          style={{
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              backgroundColor: Colors.subPrimary,
              width: '100%',
            }}>
            <View
              style={{
                height: 60,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                width: '100%',
                paddingHorizontal: 20,
              }}>
              <Button
                buttonContainerStyle={{
                  backgroundColor: 'transparent',
                }}
                onPress={() => {
                  onClose();
                }}>
                <Text
                  style={{
                    color: Colors.blue3,
                    fontSize: FontSize.xLarge,
                  }}>
                  Hủy
                </Text>
              </Button>
              <Text
                style={{
                  color: Colors.text,
                  fontSize: FontSize.smallXxLarge,
                  fontWeight: '900',
                  textAlign: 'center',
                  flex: 1,
                }}>
                Thêm thẻ
              </Text>
              <Button
                buttonContainerStyle={{
                  backgroundColor: 'transparent',
                }}
                onPress={() => {
                  onCreateNote(values);
                }}>
                <Text
                  style={{
                    color: canSave ? Colors.blue3 : Colors.gray,
                    fontSize: FontSize.xLarge,
                    paddingLeft: 20,
                  }}>
                  Lưu
                </Text>
              </Button>
            </View>
          </View>
          <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                marginVertical: 10,
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 6,
                  overflow: 'hidden',
                }}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 6,
                    transform: [{scale: 1.2}],
                  }}
                  source={ImageUrls.CARD}
                />
              </View>
              <TextInput
                onChangeText={(text) => {
                  setValues({...values, displayName: text});
                }}
                style={{
                  flex: 1,
                  borderRadius: 6,
                  backgroundColor: Colors.subPrimary,
                  paddingHorizontal: 14,
                  fontSize: FontSize.xxxLarger,
                  color: Colors.text,
                  fontWeight: '600',
                }}
                value={values.displayName}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: Colors.subPrimary,
              marginHorizontal: 10,
              borderRadius: 8,
              overflow: 'hidden',
            }}>
            <Button
              buttonContainerStyle={{
                backgroundColor: !isAttach ? Colors.primary : 'transparent',
                width: '50%',
              }}
              onPress={() => {
                setIsAttach(false);
              }}>
              <NoteIcon stroke={!isAttach ? Colors.text : ''} />
            </Button>
            <Button
              buttonContainerStyle={{
                backgroundColor: isAttach ? Colors.primary : 'transparent',
                width: '50%',
                borderRadius: 0,
              }}
              onPress={() => {
                setIsAttach(true);
              }}>
              <AttachIcon fill={isAttach ? Colors.text : ''} />
            </Button>
          </View>
          <View style={{marginTop: 24, marginHorizontal: 10}}>
            {isAttach ? (
              <>
                <Text
                  style={{
                    color: Colors.text,
                    fontSize: FontSize.xxLarger,
                    fontWeight: '800',
                  }}>
                  Thêm tệp tin
                </Text>
                <Text
                  style={{
                    color: Colors.gray,
                    fontSize: FontSize.xxLarger,
                    fontWeight: '800',
                    textAlign: 'center',
                    marginTop: 200,
                  }}>
                  Comming soon
                </Text>
              </>
            ) : (
              <View
                style={{
                  backgroundColor: Colors.subPrimary,
                  marginTop: 30,
                  borderRadius: 6,
                }}>
                <View style={style.textField}>
                  <Text style={{color: Colors.text, fontSize: FontSize.large}}>
                    Tên chủ thẻ (Viết hoa không dấu)
                  </Text>
                  <TextInput
                    onChangeText={(text) => {
                      setValues({...values, cardholderName: text});
                    }}
                    value={values.cardholderName}
                    style={{color: Colors.text, fontSize: FontSize.large}}
                  />
                </View>
                <View style={style.textField}>
                  <Text style={{color: Colors.text, fontSize: FontSize.large}}>
                    Loại thẻ
                  </Text>
                  <TextInput
                    onChangeText={(text) => {
                      setValues({...values, brand: text});
                    }}
                    value={values.brand}
                    style={{color: Colors.text, fontSize: FontSize.large}}
                  />
                </View>
                <View style={[style.textField, {position: 'relative'}]}>
                  <Text style={{color: Colors.text, fontSize: FontSize.large}}>
                    Số thẻ
                  </Text>
                  <TextInput
                    onChangeText={(text) => {
                      setValues({...values, numbers: text});
                    }}
                    secureTextEntry={hideNumber}
                    value={values.numbers}
                    style={{color: Colors.text, fontSize: FontSize.large}}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setHideNumber(!hideNumber);
                    }}>
                    {hideNumber ? (
                      <Eye
                        style={{position: 'absolute', bottom: 22, right: 10}}
                      />
                    ) : (
                      <EyeSlash
                        style={{position: 'absolute', bottom: 22, right: 10}}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={style.textField}>
                  <Text style={{color: Colors.text, fontSize: FontSize.large}}>
                    Ngày hết hạn
                  </Text>
                  <TextInput
                    onChangeText={(text) => {
                      setValues({...values, expirationDate: text});
                    }}
                    value={values.expirationDate}
                    style={{
                      color: Colors.text,
                      fontSize: FontSize.large,
                      paddingRight: 46,
                    }}
                  />
                </View>
                <View style={[style.textField, {position: 'relative'}]}>
                  <Text style={{color: Colors.text, fontSize: FontSize.large}}>
                    Mã bảo mật
                  </Text>
                  <TextInput
                    onChangeText={(text) => {
                      setValues({...values, securityCode: text});
                    }}
                    secureTextEntry={hideCode}
                    value={values.securityCode}
                    style={{
                      color: Colors.text,
                      fontSize: FontSize.large,
                      paddingRight: 46,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setHideCode(!hideCode);
                    }}>
                    {hideCode ? (
                      <Eye
                        style={{position: 'absolute', bottom: 22, right: 10}}
                      />
                    ) : (
                      <EyeSlash
                        style={{position: 'absolute', bottom: 22, right: 10}}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ReactNativeModal>
  );
};

export default AddCard;
