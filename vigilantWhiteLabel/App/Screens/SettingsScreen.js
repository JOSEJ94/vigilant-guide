import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './Styles/SettingsScreenStyle';
import { Text, Icon, Button } from 'react-native-elements';
import { withTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';
import { AuthRouteNames } from '../Routes/LoginRoutes';
import i18n from '../i18n/i18n';
import { Colors } from '../Theme/Colors';

export class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    const { t } = props;
    const options = [
      {
        key: 'profile',
        tName: t('profile'),
        navFn: this.navToProfile,
        imgSrc: 'https://unsplash.it/100/100?image=1'
      },
      {
        key: 'support',
        tName: t('support'),
        navFn: this.navToSupport,
        imgSrc: 'https://unsplash.it/100/100?image=2'
      }
    ];
    this.state = {
      options
    };
  }

  navigateToLogin = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate(AuthRouteNames.SignIn);
  };

  renderOption = option => {
    const { t } = this.props;
    const { key, tName, navFn, imgSrc } = option;
    return (
      <View style={style.optionContainer} key={key}>
        <View style={style.optionIconContainer}>
          <FastImage
            style={style.optionIcon}
            source={{
              uri: imgSrc,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={style.optionTitleContainer}>
          <Text style={style.optionTitleText}>{t(tName)}</Text>
        </View>
        <View style={style.optionIconContainer}>
          <Icon type="font-awesome" name="angle-right" />
        </View>
      </View>
    );
  };

  render() {
    const { options } = this.state;
    const { t } = this.props;
    const mappedOptions = options.map(option => this.renderOption(option));
    return (
      <SafeAreaView style={[style.screenContainer]}>
        <ScrollView style={{ flex: 1 }}>
          {mappedOptions}
          <View>
            <Button
              title={t('logout')}
              titleStyle={style.secondaryOptions}
              onPress={this.navigateToLogin}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const SettingsScreenComponent = withTranslation('settings')(SettingsScreen);
SettingsScreenComponent.navigationOptions = {
  title: i18n.t('title', { ns: 'settings' })
};

export default SettingsScreenComponent;
