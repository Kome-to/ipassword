import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {Plus} from '@common/assets/images/svg';
import {Colors, FontSize} from '@common/assets/theme/variables';
import {ScenesKey} from '@common/constants';
import Button from '@components/Button/Button';
import {setFilter} from '@services/user/actions';
import {selectFilter} from '@services/user/selector';
import {useDispatch, useSelector} from 'react-redux';
import style from './HomeStyles';
import AddCard from './components/AddCard';
import AddPasswordForm from './components/AddForm/AddPasswordForm';
import AddNote from './components/AddNote';
import AddPassword from './components/AddPassword';
import OptionsModal from './components/OptionsModal';

const HomeHeader = (props) => {
  const [isShowOption, setIsShowOption] = useState(false);
  const [isAddPassword, setIsAddPassword] = useState(false);
  const [isAddNote, setIsAddNote] = useState(false);
  const [isAddCard, setIsAddCard] = useState(false);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    setIsShowOption(false);
    setIsAddPassword(false);
    setIsAddCard(false);
    setIsAddNote(false);
    dispatch(setFilter(''));
  };

  const renderHeader = (type) => {
    switch (type) {
      case ScenesKey.HOME:
        return (
          <View style={{...style.header}}>
            <Text style={{...style.title}}>Trang chủ</Text>
            <Button
              buttonContainerStyle={style.addButton}
              onPress={() => {
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
              }}>
              <Plus />
              <Text
                style={{
                  color: Colors.text,
                  fontSize: FontSize.normal,
                  fontWeight: '700',
                  lineHeight: 18,
                }}>
                Mới
              </Text>
            </Button>
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
          </View>
        );
      default:
        return (
          <View>
            <Text>{props.route.name}</Text>
          </View>
        );
    }
  };

  return renderHeader(props.route.name);
};

export default HomeHeader;
