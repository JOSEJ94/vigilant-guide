import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import LoginRoutes from './LoginRoutes';
import LoggedInRoutes from './LoggedInRoutes';

EStyleSheet.build({
  $smallfontSize: 18,
  $regularfontSize: 21,
  $bigfontSize: 24
});

export default createAppContainer(
  createSwitchNavigator(
    {
      LoginRoutes,
      LoggedInRoutes
    },
    {
      initialRouteName: 'LoginRoutes'
    }
  )
);
