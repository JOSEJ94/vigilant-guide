import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../Screens/SettingsScreen';

export const SettingsRouteNames = {
  Settings: 'Settings'
};
export default SettingStack = createStackNavigator({
  [SettingsRouteNames.Settings]: SettingsScreen
});
