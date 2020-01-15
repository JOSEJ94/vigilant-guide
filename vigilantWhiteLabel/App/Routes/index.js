import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginRoutes from './LoginRoutes';

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
