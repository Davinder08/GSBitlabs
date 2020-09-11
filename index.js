/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';

import {name as appName} from './app.json';
import 'react-native-gesture-handler';


AppRegistry.registerComponent(appName, () => AppNavigator);
