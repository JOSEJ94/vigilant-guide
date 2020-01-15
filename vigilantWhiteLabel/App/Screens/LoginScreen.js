import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TextInput from '../Components/TextInput';

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <TextInput />
      </View>
    );
  }
}

export default LoginScreen;
