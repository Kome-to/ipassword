import React from 'react';
import {Text, View} from 'react-native';

import style from '../home/HomeStyles';

const ToolHeader = (props) => {
  return (
    <View style={{...style.header}}>
      <Text style={{...style.title}}>Công cụ</Text>
    </View>
  );
};

export default ToolHeader;
