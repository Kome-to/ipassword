import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {RightArrow} from '@common/assets/images/svg';
import {ScenesKey} from '@common/constants';
import {setCurrentGroup} from '@services/user/actions';
import {selectCurrentGroup} from '@services/user/selector';
import {useDispatch, useSelector} from 'react-redux';
import style from '../home/HomeStyles';

const GroupHeader = (props) => {
  const currentGroup = useSelector(selectCurrentGroup);
  const dispatch = useDispatch();

  return (
    <View style={{...style.header, justifyContent: 'flex-start'}}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(ScenesKey.GROUP_TABS, {
            screen: ScenesKey.GROUP,
          });
          dispatch(setCurrentGroup(null));
        }}>
        <Text
          style={{
            ...style.title,
          }}>
          Nhóm
        </Text>
      </TouchableOpacity>
      {currentGroup && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <RightArrow width={40} height={40} />
          <Text style={{...style.title}}>{currentGroup.name}</Text>
        </View>
      )}
    </View>
  );
};

export default GroupHeader;
