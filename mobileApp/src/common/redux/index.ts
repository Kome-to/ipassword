import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './rootReducer';

const configureStore = (initialState: {}) => {
  // create the redux-saga middleware
  //   const sagaMiddleware = createSagaMiddleware();
  //   const middlewares = [sagaMiddleware];
  const middlewares: any[] = [];

  const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage: AsyncStorage,
    debug: true,
    blacklist: ['common', 'user'],
  };

  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  // Don't forget to run the root saga, and return the store object.
  //   sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return {store, persistor};
};

export default configureStore({});
