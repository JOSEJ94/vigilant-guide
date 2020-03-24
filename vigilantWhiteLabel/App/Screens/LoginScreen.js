import React, { Component } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './Styles/LoginScreenStyle';
import { Input, Button } from 'react-native-elements';
import { withTranslation } from 'react-i18next';
import { LoggedInRouteNames } from '../Routes/LoggedInRoutes';
import { AuthRouteNames } from '../Routes/LoginRoutes';
import backgroundImg from '../Images/background.jpg';
import { Colors } from '../Theme/Colors';

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
      loading: false
    };
  }

  toggleShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  attemptLogin = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      const { navigation } = this.props;
      this.setState({ loading: false });
      navigation.navigate(LoggedInRouteNames.Home);
    }, 1000);
  };

  navigateToSignUp = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate(AuthRouteNames.SignUp);
  };

  focusPasswordInput = () => this.pswBtnRef.focus();

  renderLogo = () => (
    <View style={style.centeredLogo}>
      <Image
        style={style.image}
        source={{
          uri:
            'https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-7.png'
        }}
      />
    </View>
  );

  render() {
    const { username, password, showPassword, loading } = this.state;
    const { t } = this.props;
    const emailIcon = {
      type: 'font-awesome',
      name: 'user-circle',
      color: Colors.TextAlternativeDisabled
    };
    const passwordIcon = {
      type: 'font-awesome',
      name: 'asterisk',
      color: Colors.TextAlternativeDisabled
    };
    const showPasswordIcon = {
      type: 'font-awesome',
      name: 'eye',
      color: showPassword ? Colors.White : Colors.SnowWhite,
      onPress: this.toggleShowPassword
    };
    return (
      <SafeAreaView style={[style.screenContainer]}>
        <ImageBackground
          source={backgroundImg}
          style={style.loginScreenBackgroundImage}
          imageStyle={{ opacity: 0.5 }}
        />
        {this.renderLogo()}
        <View style={[style.loginFormContainer]}>
          <Input
            placeholder={t('email')}
            placeholderTextColor={Colors.SnowWhite}
            value={username}
            onChangeText={text => this.setState({ username: text })}
            leftIcon={emailIcon}
            keyboardType="email-address"
            inputStyle={style.inputStyle}
            inputContainerStyle={style.inputNoUnderline}
            leftIconContainerStyle={style.marginRightMicro}
            containerStyle={style.roundedInput}
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={this.focusPasswordInput}
          />
          <Input
            ref={ref => (this.pswBtnRef = ref)}
            containerStyle={[style.marginTopMicro]}
            placeholder={t('password')}
            placeholderTextColor={Colors.SnowWhite}
            value={password}
            onChangeText={text => this.setState({ password: text })}
            leftIcon={passwordIcon}
            rightIcon={showPasswordIcon}
            secureTextEntry={!showPassword}
            inputStyle={style.inputStyle}
            inputContainerStyle={style.inputNoUnderline}
            leftIconContainerStyle={style.marginRightMicro}
            containerStyle={style.roundedInput}
            returnKeyType="send"
            onSubmitEditing={this.attemptLogin}
          />
          <Button
            containerStyle={[style.marginTopSmall]}
            buttonStyle={[style.loginButton, style.roundedButton]}
            title={t('attemptLogin')}
            loading={loading}
            onPress={this.attemptLogin}
          />
          <View style={style.bottomOptions}>
            <Button
              title={t('needAccount')}
              titleStyle={style.secondaryOptions}
              onPress={this.navigateToSignUp}
              type="clear"
            />
            <Button
              title={t('needHelp')}
              titleStyle={style.secondaryOptions}
              type="clear"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const LoginScreenComponent = withTranslation('login')(LoginScreen);
LoginScreenComponent.navigationOptions = {
  headerShown: false
};
export default LoginScreenComponent;
