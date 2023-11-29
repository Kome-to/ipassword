import React from 'react';
import storeConfig from '@common/redux';
import {RootSiblingParent} from 'react-native-root-siblings';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';

export default class Root extends React.PureComponent<{}> {
  render(): React.ReactElement {
    return (
      <StoreProvider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <RootSiblingParent>
            <ActionSheetProvider>
              <App />
            </ActionSheetProvider>
          </RootSiblingParent>
        </PersistGate>
      </StoreProvider>
    );
  }
}
