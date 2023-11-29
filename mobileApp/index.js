import {name as appName} from './app.json';
import Root from './src/Root.tsx';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Root);
