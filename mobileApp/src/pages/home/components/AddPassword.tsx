import {Plus} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import Button from '@components/Button/Button';
import Search from '@components/Search/Search';
import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useDispatch} from 'react-redux';

import {ImageUrls} from '@common/constants';
import style from './Styles';
import {setAddPassword} from '@services/user/actions';

export const serviceNames = [
  {
    image: ImageUrls.FACEBOOk,
    url: 'https://www.facebook.com',
    name: 'Facebook',
  },
  {
    image: ImageUrls.GOOGLE,
    url: 'https://accounts.google.com/ServiceLogin',
    name: 'Google',
  },
  {
    image: ImageUrls.TWITTER,
    url: 'https://twitter.com/i/flow/login',
    name: 'Twitter',
  },
  {
    image: ImageUrls.AMAZON,
    url: 'https://www.amazon.com/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.com%3F&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0',
    name: 'Amazon',
  },
  {
    image: ImageUrls.LINKEDLN,
    url: 'https://www.linkedin.com/',
    name: 'Linkedln',
  },
  {
    image: ImageUrls.DROPBOX,
    url: 'https://www.dropbox.com/login',
    name: 'Dropbox',
  },
  {
    image: ImageUrls.SHOPEE,
    url: 'https://shopee.vn/buyer/login?next=https%3A%2F%2Fshopee.vn%2F',
    name: 'Shopee',
  },
  {
    image: ImageUrls.LAZADA,
    url: 'https://member.lazada.vn/user/login?spm=a2o4n.home.header.d5.19053bdcu2ccPt&redirect=https%3A%2F%2Fwww.lazada.vn%2F',
    name: 'Lazada',
  },
  {
    image: ImageUrls.PIXIV,
    url: 'https://accounts.pixiv.net/login?return_to=https%3A%2F%2Fwww.pixiv.net%2Fen%2F&lang=en&source=pc&view_type=page',
    name: 'Pixiv',
  },
  {
    image: ImageUrls.EBAY,
    url: 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2F',
    name: 'Ebay',
  },
];

const AddPassword = ({isVisible, onClose}): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

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
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            backgroundColor: Colors.black,
          }}>
          <Button
            buttonContainerStyle={{
              backgroundColor: 'transparent',
              left: 0,
              position: 'absolute',
            }}
            onPress={onClose}>
            <Text
              style={{
                color: Colors.blue3,
                fontSize: FontSize.xLarge,
                paddingLeft: 20,
              }}>
              Hủy
            </Text>
          </Button>
          <Text
            style={{
              color: Colors.text,
              fontSize: FontSize.smallXxLarge,
              fontWeight: '900',
            }}>
            Thêm mật khẩu
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.subPrimary,
            width: '92%',
            marginHorizontal: '4%',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Search
            wrapperStyle={{marginTop: 4}}
            onSearch={(value) => {
              setSearchValue(value);
            }}
            value={searchValue}
            placeholder="Nhập tên . . ."
          />
        </View>
        <View>
          <ScrollView style={{height: 680}}>
            <Button
              onPress={() => {
                onClose();
                dispatch(setAddPassword('custom'));
              }}
              buttonContainerStyle={style.service}>
              <Plus />
              <Text style={style.serviceName}>Thêm mật khẩu</Text>
            </Button>
            {serviceNames
              .filter((service) =>
                service.name.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .map((service) => (
                <Button
                  onPress={() => {
                    onClose();
                    dispatch(setAddPassword(service.name));
                  }}
                  key={service.name}
                  buttonContainerStyle={style.service}>
                  <Image
                    style={{width: 36, height: 36, borderRadius: 18}}
                    source={service.image}
                  />
                  <Text style={style.serviceName}>{service.name}</Text>
                </Button>
              ))}
          </ScrollView>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default AddPassword;
