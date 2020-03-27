import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';

export const HomeRouteNames = {
  Home: 'Home'
};
export default HomeStack = createStackNavigator({
  [HomeRouteNames.Home]: HomeScreen
});
