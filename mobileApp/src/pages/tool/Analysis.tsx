import {RightArrow} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ImageUrls, ModalNames} from '@common/constants';
import {GlobalState} from '@common/redux/rootReducer';
import Button from '@components/Button/Button';
import {serviceNames} from '@pages/home/components/AddPassword';
import {closeModal} from '@services/common/actions';
import {selectPasswords} from '@services/user/selector';
import React, {useMemo, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import ReactNativeModal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {getStatus} from './PassworeGenerator';
import {useActionSheet} from '@expo/react-native-action-sheet';

export const filterList = [
  {key: 'weak', color: '204,51,0', name: 'Yếu'},
  {key: 'average', color: '255, 204, 0', name: 'Trung bình'},
  {key: 'strong', color: '153, 204, 51', name: 'Mạnh'},
  {key: 'very_strong', color: '51, 153, 0', name: 'Rất mạnh'},
];

const Analysis: React.FC = () => {
  const modalStatus = useSelector((state: GlobalState) => state.common.modals);
  const dispatch = useDispatch();
  const passwords = useSelector(selectPasswords);
  const [filter, setFilter] = useState('');

  const analysis = useMemo(() => {
    const passes = passwords.map(({password}) => getStatus(password).id);
    return {
      weak: passes.filter((p) => p === 'weak').length,
      average: passes.filter((p) => p === 'average').length,
      strong: passes.filter((p) => p === 'strong').length,
      very_strong: passes.filter((p) => p === 'very_strong').length,
    };
  }, [passwords]);

  const {showActionSheetWithOptions} = useActionSheet();

  const onPress = (data) => {
    const options = [
      'Mở trong trình duyệt',
      'Xem',
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

  const data = [
    {
      name: 'Yếu',
      population: analysis.weak,
      color: 'rgba(204,51,0, 0.8)',
      legendFontColor: 'rgb(204,51,0)',
      legendFontSize: 15,
    },
    {
      name: 'Trung bình',
      population: analysis.average,
      color: 'rgba(255, 204, 0, 0.8)',
      legendFontColor: 'rgb(255, 204, 0)',
      legendFontSize: 15,
    },
    {
      name: 'Mạnh',
      population: analysis.strong,
      color: 'rgba(153, 204, 51, 0.8)',
      legendFontColor: 'rgb(153, 204, 51)',
      legendFontSize: 15,
    },
    {
      name: 'Rất mạnh',
      population: analysis.very_strong,
      color: 'rgba(51, 153, 0, 0.8)',
      legendFontColor: 'rgb(51, 153, 0)',
      legendFontSize: 15,
    },
  ];

  return (
    <ReactNativeModal
      style={{
        width: '100%',
        backgroundColor: Colors.subPrimary,
        marginHorizontal: 0,
        marginVertical: 0,
      }}
      isVisible={modalStatus[ModalNames.ANALYSIS]}>
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 10,
            gap: 86,
          }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(closeModal(ModalNames.ANALYSIS));
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
            Phân tích
          </Text>
        </View>
        <View>
          <PieChart
            data={data}
            width={400}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
            center={[10, 10]}
            absolute
          />
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <Text
            style={{
              fontSize: FontSize.smallXxLarge,
              fontWeight: '700',
              color: Colors.primary,
            }}>
            Phân tích
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 20,
              height: 36,
              justifyContent: 'space-between',
            }}>
            {filterList.map((item, i) => (
              <Button
                onPress={() => {
                  setFilter(item.key === filter ? '' : item.key);
                }}
                key={item.name}
                buttonContainerStyle={[
                  {
                    minWidth: 80,
                    paddingHorizontal: 12,
                    paddingVertical: 5,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    // backgroundColor: `rgba(${item.color}, 0.15)`,
                    backgroundColor: 'transparent',
                  },
                  filter === item.key
                    ? {
                        borderWidth: 2,
                        borderStyle: 'solid',
                        borderColor: `rgba(${item.color}, 0.5)`,
                        backgroundColor: `rgba(${item.color}, 0.4)`,
                      }
                    : {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: `rgba(${item.color}, 0.5)`,
                      },
                ]}>
                <Text
                  style={[
                    {
                      fontSize: FontSize.normal,
                      //   color: `rgba(${item.color}, 1)`,
                      color: Colors.text,
                      fontWeight: '800',
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
        </View>
        <ScrollView
          style={{
            marginTop: 10,
            height: 430,
            paddingHorizontal: 20,
          }}>
          {passwords
            .filter((item) => !filter || filter === getStatus(item.password).id)
            .map((item) => (
              <View key={item.id}>
                <Button
                  onPress={() => {
                    onPress(item);
                  }}
                  buttonContainerStyle={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                    marginVertical: 1,
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
                    <View style={{marginTop: 10}}>
                      <View
                        style={{
                          backgroundColor: `rgba(${
                            getStatus(item.password).color
                          }, 1)`,
                          width: `${getStatus(item.password).strength}%`,
                          height: 4,
                          borderRadius: 2,
                        }}
                      />
                      <Text
                        style={{
                          color: `rgba(${getStatus(item.password).color}, 1)`,
                        }}>
                        {getStatus(item.password).message}
                      </Text>
                    </View>
                  </View>
                  <RightArrow />
                </Button>
              </View>
            ))}
          <View
            style={{backgroundColor: 'transparent', height: 30, width: '100%'}}
          />
        </ScrollView>
      </View>
    </ReactNativeModal>
  );
};

export default Analysis;
