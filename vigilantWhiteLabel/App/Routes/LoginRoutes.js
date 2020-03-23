import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';

export const AuthRouteNames = {
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  ForgotPassword: 'ForgotPassword',
  ContactSupport: 'ContactSupport'
};

export default AuthStack = createStackNavigator({
  [AuthRouteNames.SignIn]: LoginScreen,
  [AuthRouteNames.SignUp]: SignUpScreen
});
