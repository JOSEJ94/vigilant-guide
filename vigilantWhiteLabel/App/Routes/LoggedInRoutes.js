import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeStack from './HomeRoutes';
import SettingsStack from './SettingsRoutes';

export const TabRouteNames = {
  Home: 'Home',
  Settings: 'Settings'
};
export default TabStack = createBottomTabNavigator({
  [TabRouteNames.Home]: HomeStack,
  [TabRouteNames.Settings]: SettingsStack
});
