import api from '@common/api';
import {GroupIcon, Plus} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ScenesKey} from '@common/constants';
import Button from '@components/Button/Button';
import Search from '@components/Search/Search';
import {setLoading} from '@services/common/actions';
import {setCurrentGroup, setGroups} from '@services/user/actions';
import {selectGroups} from '@services/user/selector';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddGroup from './components/AddGroup';

import style from '../home/HomeStyles';

const Group = (props): React.ReactElement => {
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);
  const [isAddGroup, setIsAddGroup] = useState(false);
  const [search, setSearch] = useState('');

  const getGroups = async () => {
    try {
      dispatch(setLoading(true));
      const {data} = await api.user.getGroups();
      dispatch(setGroups([...data.groups]));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getGroups();
  }, []);

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
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginVertical: 10,
          marginHorizontal: 14,
        }}>
        <Button
          buttonContainerStyle={[
            style.addButton,
            {
              width: 80,
              justifyContent: 'flex-start',
            },
          ]}
          onPress={() => {
            setIsAddGroup(true);
          }}>
          <Plus />
          <Text
            style={{
              color: Colors.text,
              fontSize: FontSize.normal,
              fontWeight: '700',
              lineHeight: 18,
            }}>
            Tạo
          </Text>
        </Button>
      </View>

      <ScrollView style={{marginTop: 20, display: 'flex'}}>
        {groups &&
          groups
            .filter(
              (group) =>
                !search ||
                group.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map((group, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  props.navigation.navigate(ScenesKey.GROUP_DETAIL);
                  dispatch(setCurrentGroup(group));
                }}>
                <View
                  style={{
                    flex: 1,
                    height: 70,
                    marginHorizontal: 10,
                    marginTop: 20,
                    backgroundColor: Colors.subPrimary,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    gap: 20,
                    paddingHorizontal: 20,
                  }}>
                  <GroupIcon width={36} height={36} />
                  <Text
                    style={{
                      fontSize: FontSize.xLarge,
                      color: Colors.text,
                      fontWeight: '500',
                    }}>
                    {group.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
      </ScrollView>
      <AddGroup
        isVisible={isAddGroup}
        onClose={() => {
          setIsAddGroup(false);
        }}
      />
    </View>
  );
};

export default Group;
