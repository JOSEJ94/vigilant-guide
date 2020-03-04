import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import LoginRoutes from './LoginRoutes';

EStyleSheet.build();

export default createAppContainer(
  createSwitchNavigator(
    {
      LoginRoutes
    },
    {
      initialRouteName: 'LoginRoutes'
    }
  )
);
