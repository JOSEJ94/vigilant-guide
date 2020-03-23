import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import backgroundImg from '../Images/background.jpg';
import style from './Styles/HomeScreenStyle';

export class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: 'red' }}>
          <ImageBackground
            source={backgroundImg}
            style={{ width: '100%', height: '100%' }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center'
              }}
            >
              <Text style={style.headerText}>Nombre completo</Text>
              <Text style={style.headerText}>Rol</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 3 }}>
          <Text> Menu </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
