import api from '@common/api';
import {
  AllIcon,
  CardIcon,
  CopyIcon,
  NoteIcon,
  PasswordIcon,
} from '@common/assets/images/svg';
import {OptionToastSuccess} from '@common/assets/theme/common';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ImageUrls} from '@common/constants';
import {NavigationProps} from '@common/types';
import Button from '@components/Button/Button';
import Search from '@components/Search/Search';
import {useActionSheet} from '@expo/react-native-action-sheet';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  setCards,
  setFilter,
  setNotes,
  setPasswords,
} from '@services/user/actions';
import {
  selectCards,
  selectCurrentUser,
  selectFilter,
  selectNotes,
  selectPasswords,
} from '@services/user/selector';
import React, {useEffect, useRef} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Toast from 'react-native-root-toast';
import {useDispatch, useSelector} from 'react-redux';
import styles from './HomeStyles';
import AddPasswordForm from './components/AddForm/AddPasswordForm';
import {serviceNames} from './components/AddPassword';

interface HomeProps {
  navigation: NavigationProps;
}

export const Home = ({navigation}: HomeProps) => {
  const filter = useSelector(selectFilter);
  const scrollRef = useRef<any>();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const passwords = useSelector(selectPasswords);
  const notes = useSelector(selectNotes);
  const cards = useSelector(selectCards);
  const {showActionSheetWithOptions} = useActionSheet();

  const onPress = () => {
    const options = [
      'Mở trong trình duyệt',
      'Xem',
      'Delete',
      'Sao chép tên tài khoản',
      'Sao chép mật khẩu',
      'Hiển thị mật khẩu',
      'Chỉnh sửa',
      'Hủy',
      'Xóa',
    ];
    const destructiveButtonIndex = options.length - 1;
    const cancelButtonIndex = options.length - 2;

    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
      },
      (selectedIndex: number) => {
        switch (selectedIndex) {
          case 1:
            // Save
            break;

          case destructiveButtonIndex:
            // Delete
            break;
        }
      },
    );
  };

  const filterList = [
    {key: 'all', name: 'Tất cả', icon: <AllIcon />},
    {key: 'password', name: 'Mật khẩu', icon: <PasswordIcon />},
    {key: 'note', name: 'Ghi chú', icon: <NoteIcon />},
    {key: 'card', name: 'Thẻ', icon: <CardIcon />},
  ];
  useEffect(() => {
    if (scrollRef.current) {
      if (!filter) {
        scrollRef.current.scrollTo({
          x: 0,
          animated: true,
        });
      }
    }
  }, [filter]);

  const getUserData = async () => {
    try {
      const {data} = await api.user.getData();
      dispatch(setPasswords([...data.passwords]));
      dispatch(setNotes([...data.notes]));
      dispatch(setCards([...data.cards]));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View>
      <Search onSearch={() => {}} placeholder={''} />
      <View>
        <ScrollView
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          style={{
            display: 'flex',
            gap: 10,
            flexDirection: 'row',
            overflow: 'scroll',
            width: '100%',
            marginTop: 10,
            paddingVertical: 4,
          }}
          horizontal>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              overflow: 'scroll',
              paddingHorizontal: 4,
            }}>
            {filterList.map((item, i) => (
              <Button
                onPress={() => {
                  dispatch(setFilter(item.key));
                  scrollRef.current.scrollTo({
                    x: i * 40,
                    animated: true,
                  });
                }}
                key={item.name}
                buttonContainerStyle={[
                  {
                    marginLeft: 10,
                    paddingHorizontal: 12,
                    paddingVertical: 5,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    gap: 10,
                    borderWidth: 2,
                    borderStyle: 'solid',
                    borderColor: Colors.background,
                  },
                  filter === item.key
                    ? styles.filterActive
                    : item.key === 'all' && !filter
                      ? styles.filterActive
                      : {},
                ]}>
                {item.icon}
                <Text
                  style={[
                    {
                      color: Colors.gray,
                    },
                    filter === item.key
                      ? {color: Colors.text}
                      : item.key === 'all' && !filter
                        ? {color: Colors.text}
                        : {},
                  ]}>
                  {item.name}
                </Text>
              </Button>
            ))}
          </View>
        </ScrollView>
        <ScrollView
          style={{
            width: '100%',
            height: 540,
            marginVertical: 10,
          }}>
          {!['note', 'card'].includes(filter) && (
            <View style={{flex: 1, marginHorizontal: 14, marginTop: 4}}>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <NoteIcon stroke={Colors.primary} />
                <Text
                  style={{
                    fontSize: FontSize.xLarge,
                    color: Colors.primary,
                    fontWeight: '800',
                  }}>
                  Mật khẩu
                </Text>
              </View>
              <View style={{flex: 1}}>
                {passwords &&
                  passwords.map((item) => (
                    <View key={item.id}>
                      <Button
                        onPress={() => {
                          onPress();
                        }}
                        buttonContainerStyle={{
                          flex: 1,
                          borderBottomColor: Colors.gray,
                          backgroundColor: 'transparent',
                          borderBottomWidth: 0.3,
                          borderStyle: 'solid',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 20,
                          marginVertical: 10,
                          paddingBottom: 4,
                        }}>
                        <Image
                          style={{
                            width: 36,
                            height: 36,
                            objectFit: 'cover',
                            borderRadius: 6,
                          }}
                          source={
                            serviceNames.find(
                              (service) => service.name === item.serviceName,
                            )?.image || ImageUrls.LOCK
                          }
                        />
                        <View style={{flex: 1}}>
                          <Text
                            style={{
                              fontSize: FontSize.xLarge,
                              color: Colors.text,
                              fontWeight: '800',
                            }}>
                            {item.displayName}
                          </Text>
                          <Text
                            style={{
                              fontSize: FontSize.large,
                              color: Colors.text,
                            }}>
                            {item.username}
                          </Text>
                        </View>
                        <Button
                          onPress={() => {
                            Clipboard.setString(item.password);
                            Toast.show(
                              'Sao chép mật khẩu thành công',
                              OptionToastSuccess,
                            );
                          }}
                          buttonContainerStyle={{
                            backgroundColor: 'transparent',
                          }}>
                          <CopyIcon />
                        </Button>
                      </Button>
                    </View>
                  ))}
              </View>
            </View>
          )}
          {!['password', 'card'].includes(filter) && (
            <View style={{flex: 1, marginHorizontal: 14, marginTop: 10}}>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <NoteIcon stroke={Colors.primary} />
                <Text
                  style={{
                    fontSize: FontSize.xLarge,
                    color: Colors.primary,
                    fontWeight: '800',
                  }}>
                  Ghi chú
                </Text>
              </View>
              <View style={{flex: 1}}>
                {notes &&
                  notes.map((item) => (
                    <View key={item.id}>
                      <Button
                        onPress={() => {
                          onPress();
                        }}
                        buttonContainerStyle={{
                          flex: 1,
                          borderBottomColor: Colors.gray,
                          backgroundColor: 'transparent',
                          borderBottomWidth: 0.3,
                          borderStyle: 'solid',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 20,
                          marginVertical: 10,
                          paddingBottom: 4,
                        }}>
                        <Image
                          style={{
                            width: 36,
                            height: 36,
                            objectFit: 'cover',
                            borderRadius: 6,
                          }}
                          source={ImageUrls.NOTE}
                        />
                        <View style={{flex: 1}}>
                          <Text
                            style={{
                              fontSize: FontSize.xLarge,
                              color: Colors.text,
                              fontWeight: '800',
                            }}>
                            {item.displayName}
                          </Text>
                        </View>
                      </Button>
                    </View>
                  ))}
              </View>
            </View>
          )}
          {!['password', 'note'].includes(filter) && (
            <View style={{flex: 1, marginHorizontal: 14, marginTop: 10}}>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <NoteIcon stroke={Colors.primary} />
                <Text
                  style={{
                    fontSize: FontSize.xLarge,
                    color: Colors.primary,
                    fontWeight: '800',
                  }}>
                  Thẻ
                </Text>
              </View>
              <View style={{flex: 1}}>
                {notes &&
                  notes.map((item) => (
                    <View key={item.id}>
                      <Button
                        onPress={() => {
                          onPress();
                        }}
                        buttonContainerStyle={{
                          flex: 1,
                          borderBottomColor: Colors.gray,
                          backgroundColor: 'transparent',
                          borderBottomWidth: 0.3,
                          borderStyle: 'solid',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 20,
                          marginVertical: 10,
                          paddingBottom: 4,
                        }}>
                        <Image
                          style={{
                            width: 36,
                            height: 36,
                            objectFit: 'cover',
                            borderRadius: 6,
                          }}
                          source={ImageUrls.NOTE}
                        />
                        <View style={{flex: 1}}>
                          <Text
                            style={{
                              fontSize: FontSize.xLarge,
                              color: Colors.text,
                              fontWeight: '800',
                            }}>
                            {item.displayName}
                          </Text>
                        </View>
                      </Button>
                    </View>
                  ))}
              </View>
            </View>
          )}
        </ScrollView>
        <AddPasswordForm />
      </View>
    </View>
  );
};
