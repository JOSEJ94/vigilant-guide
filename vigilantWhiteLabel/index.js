/**
 * @format
 */

import { AppRegistry } from 'react-native';
import i18n from './App/i18n/i18n';
// import App from './App';
import App from './App/Routes';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
