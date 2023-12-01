import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {Plus} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ScenesKey} from '@common/constants';
import Button from '@components/Button/Button';
import {setFilter} from '@services/user/actions';
import {selectFilter} from '@services/user/selector';
import {useDispatch, useSelector} from 'react-redux';
import style from '../home/HomeStyles';
import OptionsModal from '@pages/home/components/OptionsModal';
import AddPassword from '@pages/home/components/AddPassword';
import AddNote from '@pages/home/components/AddNote';
import AddCard from '@pages/home/components/AddCard';

const ToolHeader = (props) => {
  return (
    <View style={{...style.header}}>
      <Text style={{...style.title}}>Công cụ</Text>
    </View>
  );
};

export default ToolHeader;
