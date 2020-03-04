import React, { Component } from 'react';
import { View, Image } from 'react-native';
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
            label="Usuario"
            placeholder="email@test.com"
            value={username}
            onChangeText={text => this.setState({ username: text })}
            leftIcon={{ type: 'font-awesome', name: 'user-circle' }}
            keyboardType="email-address"
          />
          <Input
            containerStyle={[style.marginTopMicro]}
            label="Contraseña"
            placeholder="Contraseña"
            value={password}
            onChangeText={text => this.setState({ password: text })}
            leftIcon={{ type: 'font-awesome', name: 'asterisk' }}
            secureTextEntry
          />
          <Button
            containerStyle={[style.marginTopSmall]}
            buttonStyle={[style.loginButton]}
            title="Iniciar Sesión"
            loading={false}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
