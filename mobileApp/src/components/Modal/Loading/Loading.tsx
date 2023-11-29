import {Colors} from '@common/assets/theme/variables';
import {GlobalState} from '@common/redux/rootReducer';
import React from 'react';
import Modal from 'react-native-modal';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';

const Loading = () => {
  const loading = useSelector((state: GlobalState) => state.common.loading);

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={loading}
      style={{margin: 0}}
      backdropOpacity={0.3}>
      <ActivityIndicator
        size={40}
        animating={true}
        color={Colors.lightMainBlue}
      />
    </Modal>
  );
};

export default Loading;
