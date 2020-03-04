import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { string, func, any } from 'prop-types';

class TextInput extends Component {
  passwordMask = text => '*';

  render() {
    const {
      text,
      placeholder,
      label,
      onChangeText,
      secureTextEntry,
      ...otherProps
    } = this.props;
    return (
      <TextField
        secureTextEntry={secureTextEntry}
        value={text}
        placeholder={placeholder}
        label={label}
        onChangeText={onChangeText}
        {...otherProps}
      />
    );
  }
}
TextInput.propTypes = {
  text: string.isRequired,
  placeholder: string,
  label: string,
  onChangeText: func.isRequired,
  otherProps: any
};
TextInput.defaultProps = {
  placeholder: '',
  label: 'Label',
  onChangeText: text => console.log(text)
};

export default TextInput;
