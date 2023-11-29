import api from '@common/api';
import {AttachIcon, NoteIcon} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ImageUrls} from '@common/constants';
import Button from '@components/Button/Button';
import {setLoading} from '@services/common/actions';
import {setNotes} from '@services/user/actions';
import React, {useState, useEffect} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useDispatch} from 'react-redux';

const AddNote = ({isVisible, onClose}): React.ReactElement => {
  const [canSave, setCanSave] = useState(false);
  const [isAttach, setIsAttach] = useState(false);
  const [values, setValues] = useState({displayName: '', content: ''});
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(!isVisible)
  // },[isVisible])

  useEffect(() => {
    setCanSave(!!(values.content && values.displayName));
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
              Tạo ghi chú
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
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 6,
                }}
                source={ImageUrls.NOTE}
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
            <>
              <Text
                style={{
                  color: Colors.text,
                  fontSize: FontSize.xxLarger,
                  fontWeight: '800',
                }}>
                Thêm nội dung
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  height: 200,
                  backgroundColor: Colors.subPrimary,
                  marginTop: 20,
                  borderRadius: 10,
                  fontSize: FontSize.large,
                  textAlignVertical: 'top',
                  paddingHorizontal: 16,
                  paddingVertical: 16,
                  color: Colors.text,
                }}
                value={values.content}
                onChangeText={(text) => {
                  setValues({...values, content: text});
                }}
                multiline
                placeholderTextColor={Colors.gray}
                placeholder={'Nhập nội dung... \n'}
              />
            </>
          )}
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default AddNote;
