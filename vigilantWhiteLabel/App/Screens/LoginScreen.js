import React, { Component } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './Styles/LoginScreenStyle';
import { Input, Button } from 'react-native-elements';
import { LoggedInRouteNames } from '../Routes/LoggedInRoutes';
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

  static navigationOptions = {
    headerShown: false
  };

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
    }, 5000);
  };
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
    return (
      <ImageBackground
        source={backgroundImg}
        style={style.loginScreenBackgroundImage}
        imageStyle={{ opacity: 0.5 }}
      >
        <SafeAreaView style={[style.screenContainer]}>
          {this.renderLogo()}
          <View style={[style.loginFormContainer]}>
            <Input
              placeholder="email@test.com"
              value={username}
              onChangeText={text => this.setState({ username: text })}
              leftIcon={{
                type: 'font-awesome',
                name: 'user-circle',
                color: Colors.TextAlternativeDisabled
              }}
              keyboardType="email-address"
              inputContainerStyle={style.inputNoUnderline}
              leftIconContainerStyle={style.marginRightMicro}
              containerStyle={style.roundedInput}
            />
            <Input
              containerStyle={[style.marginTopMicro]}
              placeholder="Contraseña"
              value={password}
              onChangeText={text => this.setState({ password: text })}
              leftIcon={{
                type: 'font-awesome',
                name: 'asterisk',
                color: Colors.TextAlternativeDisabled
              }}
              rightIcon={{
                type: 'font-awesome',
                name: 'eye',
                color: showPassword
                  ? Colors.Primary
                  : Colors.TextAlternativeDisabled,
                onPress: this.toggleShowPassword
              }}
              secureTextEntry={!showPassword}
              inputContainerStyle={style.inputNoUnderline}
              leftIconContainerStyle={style.marginRightMicro}
              containerStyle={style.roundedInput}
            />
            <Button
              containerStyle={[style.marginTopSmall]}
              buttonStyle={[style.loginButton, style.roundedButton]}
              title="Iniciar Sesión"
              loading={loading}
              onPress={this.attemptLogin}
            />
            <View style={style.bottomOptions}>
              <Text>Crear cuenta</Text>
              <Text>Necesitas ayuda?</Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
