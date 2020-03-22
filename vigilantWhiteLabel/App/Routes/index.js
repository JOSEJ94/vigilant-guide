import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import LoginRoutes from './LoginRoutes';
import LoggedInRoutes from './LoggedInRoutes';

EStyleSheet.build();

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
