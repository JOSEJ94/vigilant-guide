import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';

export const LoggedInRouteNames = {
  Home: 'Home'
};
export default HomeStack = createStackNavigator({
  [LoggedInRouteNames.Home]: HomeScreen
});
