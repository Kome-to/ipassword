import React from 'react';
import {Text, View} from 'react-native';

import style from '../home/HomeStyles';

const SettingHeader = (props) => {
  return (
    <View style={{...style.header, justifyContent: 'flex-start'}}>
      <View>
        <Text
          style={{
            ...style.title,
          }}>
          Cài đặt
        </Text>
      </View>
    </View>
  );
};

export default SettingHeader;
