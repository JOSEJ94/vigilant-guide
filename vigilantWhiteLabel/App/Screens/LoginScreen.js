import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './LoginScreenStyle';
import { Input, Button } from 'react-native-elements';

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    headerShown: false
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
    const { username, password } = this.state;
    return (
      <SafeAreaView style={[style.screenContainer]}>
        {this.renderLogo()}
        <View style={[style.loginFormContainer]}>
          <Input
            placeholder="email@test.com"
            value={username}
            onChangeText={text => this.setState({ username: text })}
            leftIcon={{ type: 'font-awesome', name: 'user-circle' }}
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
            leftIcon={{ type: 'font-awesome', name: 'asterisk' }}
            secureTextEntry
            inputContainerStyle={style.inputNoUnderline}
            leftIconContainerStyle={style.marginRightMicro}
            containerStyle={style.roundedInput}
          />
          <Button
            containerStyle={[style.marginTopSmall]}
            buttonStyle={[style.loginButton, style.roundedButton]}
            title="Iniciar Sesión"
            loading={false}
          />
          <View style={style.bottomOptions}>
            <Text>Crear cuenta</Text>
            <Text>Necesitas ayuda?</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
