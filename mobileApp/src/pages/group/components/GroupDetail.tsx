import {
  CardIcon,
  CopyIcon,
  MemberIcon,
  NoteIcon,
  Plus,
  RightArrow,
  UserIcon,
  VaultIcon,
} from '@common/assets/images/svg';
import {OptionToastSuccess} from '@common/assets/theme/common';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ImageUrls} from '@common/constants';
import Button from '@components/Button/Button';
import Search from '@components/Search/Search';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {filterList} from '@pages/home/Home';
import AddCard from '@pages/home/components/AddCard';
import AddNote from '@pages/home/components/AddNote';
import AddPassword, {serviceNames} from '@pages/home/components/AddPassword';
import OptionsModal from '@pages/home/components/OptionsModal';
import Clipboard from '@react-native-clipboard/clipboard';
import {setFilter} from '@services/user/actions';
import {
  selectCards,
  selectFilter,
  selectNotes,
  selectPasswords,
} from '@services/user/selector';
import React, {useRef, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-root-toast';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../../home/HomeStyles';
import AddMember from './AddMember';

const GroupDetail = (): React.ReactElement => {
  const [search, setSearch] = useState();
  const [isViewMember, setIsVewMember] = useState(false);
  const passwords = useSelector(selectPasswords);
  const notes = useSelector(selectNotes);
  const cards = useSelector(selectCards);
  const filter = useSelector(selectFilter);
  const [searchValue, setSearchValue] = useState('');
  const scrollRef = useRef<any>(null);
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);
  const [isShowOption, setIsShowOption] = useState(false);
  const [isAddPassword, setIsAddPassword] = useState(false);
  const [isAddNote, setIsAddNote] = useState(false);
  const [isAddCard, setIsAddCard] = useState(false);
  const [isAddMember, setIsAddMember] = useState(false);
  const {showActionSheetWithOptions} = useActionSheet();

  const onMemberAction = () => {
    const options = ['Xem', 'Hủy', 'Xoá'];
    const destructiveButtonIndex = options.length - 1;
    const cancelButtonIndex = options.length - 2;

    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
        containerStyle: {backgroundColor: Colors.subPrimary},
        tintColor: Colors.text,
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

  const onCloseModal = () => {
    setIsShowOption(false);
    setIsAddPassword(false);
    setIsAddCard(false);
    setIsAddNote(false);
    dispatch(setFilter(''));
  };

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
        containerStyle: {backgroundColor: Colors.subPrimary},
        tintColor: Colors.text,
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

  return (
    <View>
      <Search
        value={search}
        onSearch={(text) => {
          setSearch(text);
        }}
        placeholder=""
      />
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
          marginTop: 10,
          height: 40,
        }}>
        <Button
          buttonContainerStyle={{
            backgroundColor: isViewMember ? 'transparent' : Colors.primary,
            width: '50%',
          }}
          onPress={() => {
            setIsVewMember(false);
          }}>
          <VaultIcon fill={isViewMember ? Colors.gray : Colors.text} />
        </Button>
        <Button
          buttonContainerStyle={{
            backgroundColor: isViewMember ? Colors.primary : 'transparent',
            width: '50%',
            borderRadius: 0,
          }}
          onPress={() => {
            setIsVewMember(true);
            setShowFilter(false);
          }}>
          <MemberIcon fill={isViewMember ? Colors.text : Colors.gray} />
        </Button>
      </View>
      {showFilter ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginRight: 16,
            marginVertical: 10,
            flexDirection: 'row',
            height: 46,
          }}>
          {!isViewMember && (
            <Button
              buttonContainerStyle={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'transparent',
                paddingLeft: 10,
              }}
              onPress={() => {
                setShowFilter(false);
              }}>
              <RightArrow style={{transform: [{rotate: '90deg'}]}} />
            </Button>
          )}
          <ScrollView
            ref={scrollRef}
            showsHorizontalScrollIndicator={false}
            style={{
              display: 'flex',
              gap: 10,
              flexDirection: 'row',
              overflow: 'scroll',
              width: '100%',
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
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({
                        x: i * 40,
                        animated: true,
                      });
                    }
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
        </View>
      ) : (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 16,
            marginVertical: 10,
            height: 46,
          }}>
          {!isViewMember ? (
            <Button
              buttonContainerStyle={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'transparent',
                gap: 4,
                paddingLeft: 10,
              }}
              onPress={() => {
                setShowFilter(true);
              }}>
              <RightArrow />
              <Text style={{color: Colors.gray, fontSize: FontSize.large}}>
                Lọc
              </Text>
            </Button>
          ) : (
            <View />
          )}
          <Button
            buttonContainerStyle={{
              backgroundColor: Colors.background,
              width: 40,
              height: 40,
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: Colors.primary,
            }}
            onPress={() => {
              if (!isViewMember) {
                switch (filter) {
                  case 'password':
                    setIsAddPassword(true);
                    break;
                  case 'note':
                    setIsAddNote(true);
                    break;
                  case 'card':
                    setIsAddCard(true);
                    break;
                  default:
                    setIsShowOption(true);
                    break;
                }
              } else {
                setIsAddMember(true);
              }
            }}>
            <Plus />
          </Button>
        </View>
      )}
      <ScrollView
        style={{
          width: '100%',
          height: 500,
        }}>
        {isViewMember ? (
          ['1', '2', '3', '4', '5', '6', '7'].map((item, i) => (
            <TouchableOpacity key={item} onPress={onMemberAction}>
              <View
                style={{
                  borderBottomColor: Colors.gray,
                  borderBottomWidth: 0.4,
                  borderStyle: 'solid',
                  marginHorizontal: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 14,
                  paddingVertical: 10,
                  marginBottom: 20,
                  alignItems: 'center',
                }}>
                <UserIcon />
                <View>
                  <Text style={{fontSize: FontSize.xLarge, color: Colors.text}}>
                    {'item?.firstName' && 'item?.firstLast'
                      ? `${'Duc'} ${'Anh'}`
                      : 'Người dùng'}
                    {'   '}
                    {i === 2 && (
                      <Text
                        style={{
                          fontSize: FontSize.normal,
                          color: Colors.primary,
                        }}>
                        {'(Bạn)'}
                      </Text>
                    )}
                  </Text>
                  <Text style={{fontSize: FontSize.large, color: Colors.gray}}>
                    ducanhnd2306@gmail.com
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      flex: 1,
                      textAlign: 'right',
                      fontSize: FontSize.normal,
                      color: Colors.gray,
                    }}>
                    {i === 0 ? 'Chủ nhóm' : ' Thành viên'}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <>
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
                    passwords
                      .filter(
                        (item) =>
                          !searchValue ||
                          item.displayName
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()),
                      )
                      .map((item) => (
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
                                  (service) =>
                                    service.name === item.serviceName,
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
                    notes
                      .filter(
                        (item) =>
                          !searchValue ||
                          item.displayName
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()),
                      )
                      .map((item) => (
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
                  <CardIcon stroke={Colors.primary} />
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
                  {cards &&
                    cards
                      .filter(
                        (item) =>
                          !searchValue ||
                          item.displayName
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()),
                      )
                      .map((item) => (
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
                              source={ImageUrls.CARD}
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
                              <View
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  gap: 2,
                                }}>
                                <Text
                                  style={{
                                    fontSize: FontSize.large,
                                    color: Colors.text,
                                    letterSpacing: 2,
                                    marginTop: 4,
                                  }}>
                                  ***********
                                </Text>
                                <Text
                                  style={{
                                    fontSize: FontSize.large,
                                    color: Colors.text,
                                    letterSpacing: 2,
                                  }}>
                                  {item.numbers.substring(
                                    item.numbers.length - 4,
                                  ) || ''}
                                </Text>
                              </View>
                            </View>
                          </Button>
                        </View>
                      ))}
                </View>
              </View>
            )}
          </>
        )}
      </ScrollView>
      <OptionsModal
        onAdd={(key) => {
          dispatch(setFilter(key));
          switch (key) {
            case 'password':
              setIsAddPassword(true);
              break;
            case 'note':
              setIsAddNote(true);
              break;
            case 'card':
              setIsAddCard(true);
              break;
            default:
              break;
          }
        }}
        onToggle={onCloseModal}
        isVisible={isShowOption}
      />
      {filter === 'password' && (
        <AddPassword onClose={onCloseModal} isVisible={isAddPassword} />
      )}

      {filter === 'note' && (
        <AddNote onClose={onCloseModal} isVisible={isAddNote} />
      )}

      {filter === 'card' && (
        <AddCard onClose={onCloseModal} isVisible={isAddCard} />
      )}
      <AddMember
        isVisible={isAddMember}
        onClose={() => {
          setIsAddMember(false);
        }}
      />
    </View>
  );
};

export default GroupDetail;
