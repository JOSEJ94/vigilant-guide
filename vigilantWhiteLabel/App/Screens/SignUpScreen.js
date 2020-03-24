import React, { Component } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from './Styles/SignUpScreenStyle';
import { Input, Button } from 'react-native-elements';
import { withTranslation } from 'react-i18next';
import { LoggedInRouteNames } from '../Routes/LoggedInRoutes';
import { Colors } from '../Theme/Colors';

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      loading: false
    };
  }

  attemptCreate = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      const { navigation } = this.props;
      this.setState({ loading: false });
      navigation.navigate(LoggedInRouteNames.Home);
    }, 1000);
  };

  focusNext = () => {
    const { fullname, email, phone, password, confirmPassword } = this.state;
    if (!fullname) {
      this.fullNameInputRef.focus();
      return;
    }
    if (!email) {
      this.emailInputRef.focus();
      return;
    }
    if (!phone) {
      this.phoneInputRef.focus();
      return;
    }
    if (!password) {
      this.pswInputRef.focus();
      return;
    }
    if (!confirmPassword) {
      this.pswConfirmInputRef.focus();
      return;
    }
    this.attemptCreate();
  };

  renderIcon = (name, enabled) => ({
    type: 'font-awesome',
    name,
    color: enabled ? Colors.Primary : Colors.Grey
  });

  render() {
    const {
      fullname,
      confirmPassword,
      password,
      phone,
      email,
      loading
    } = this.state;
    const { t } = this.props;
    const isFormComplete = !!(
      fullname &&
      confirmPassword &&
      password &&
      phone &&
      email
    );
    const returnKeyType = isFormComplete ? 'send' : 'next';
    return (
      <SafeAreaView style={[style.screenContainer]}>
        <View style={[style.loginFormContainer]}>
          <Input
            ref={ref => (this.fullNameInputRef = ref)}
            placeholder={t('fullname')}
            placeholderTextColor={Colors.Grey}
            value={fullname}
            onChangeText={text => this.setState({ fullname: text })}
            leftIcon={this.renderIcon('user-circle', fullname)}
            inputStyle={style.inputStyle}
            inputContainerStyle={style.inputNoUnderline}
            leftIconContainerStyle={style.marginRightMicro}
            containerStyle={
              fullname ? style.roundedInputCorrect : style.roundedInput
            }
            blurOnSubmit={isFormComplete}
            returnKeyType={returnKeyType}
            onSubmitEditing={this.focusNext}
          />
          <Input
            ref={ref => (this.emailInputRef = ref)}
            placeholder={t('email')}
            placeholderTextColor={Colors.Grey}
            value={email}
            onChangeText={text => this.setState({ email: text })}
            leftIcon={this.renderIcon('envelope-o', email)}
            keyboardType="email-address"
            inputStyle={style.inputStyle}
            inputContainerStyle={style.inputNoUnderline}
            leftIconContainerStyle={style.marginRightMicro}
            containerStyle={
              email ? style.roundedInputCorrect : style.roundedInput
            }
            blurOnSubmit={isFormComplete}
            returnKeyType={returnKeyType}
            onSubmitEditing={this.focusNext}
          />
          <Input
            ref={ref => (this.phoneInputRef = ref)}
            placeholder={t('phone')}
            placeholderTextColor={Colors.Grey}
            value={phone}
            onChangeText={text => this.setState({ phone: text })}
            leftIcon={this.renderIcon('phone', phone)}
            keyboardType="phone-pad"
            inputStyle={style.inputStyle}
            inputContainerStyle={style.inputNoUnderline}
            leftIconContainerStyle={style.marginRightMicro}
            containerStyle={
              phone ? style.roundedInputCorrect : style.roundedInput
            }
            blurOnSubmit={isFormComplete}
            returnKeyType={returnKeyType}
            onSubmitEditing={this.focusNext}
          />
          <Input
            ref={ref => (this.pswInputRef = ref)}
            containerStyle={[style.marginTopMicro]}
            placeholder={t('password')}
            placeholderTextColor={Colors.Grey}
            value={password}
            onChangeText={text => this.setState({ password: text })}
            leftIcon={this.renderIcon('asterisk', password)}
            secureTextEntry
            inputStyle={style.inputStyle}
            inputContainerStyle={style.inputNoUnderline}
            leftIconContainerStyle={style.marginRightMicro}
            containerStyle={
              password ? style.roundedInputCorrect : style.roundedInput
            }
            blurOnSubmit={isFormComplete}
            returnKeyType={returnKeyType}
            onSubmitEditing={this.focusNext}
          />
          <Input
            ref={ref => (this.pswConfirmInputRef = ref)}
            containerStyle={[style.marginTopMicro]}
            placeholder={t('confirmPassword')}
            placeholderTextColor={Colors.Grey}
            value={confirmPassword}
            onChangeText={text => this.setState({ confirmPassword: text })}
            leftIcon={this.renderIcon('asterisk', confirmPassword)}
            secureTextEntry
            inputStyle={style.inputStyle}
            inputContainerStyle={style.inputNoUnderline}
            leftIconContainerStyle={style.marginRightMicro}
            containerStyle={
              confirmPassword ? style.roundedInputCorrect : style.roundedInput
            }
            blurOnSubmit={isFormComplete}
            returnKeyType={returnKeyType}
            onSubmitEditing={this.focusNext}
          />
          <Button
            containerStyle={[style.marginTopSmall]}
            buttonStyle={[style.loginButton, style.roundedButton]}
            title={t('attemptCreate')}
            loading={loading}
            onPress={this.attemptCreate}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default withTranslation('signUp')(SignUpScreen);
