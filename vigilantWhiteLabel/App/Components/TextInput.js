import React, { Component } from 'react';
import { Input, Item } from 'native-base';
import { string, any } from 'prop-types';

class TextInput extends Component {
  render() {
    const {
      text,
      placeholder,
      containerStyle,
      textStyle,
      onChangeText,
      ...otherProps
    } = this.props;
    return (
      <Item underline style={containerStyle}>
        <Input
          placeholder={placeholder}
          style={textStyle}
          {...otherProps}
          onChangeText={onChangeText}
        />
      </Item>
    );
  }
}
TextInput.propTypes = {
  text: string.isRequired,
  placeholder: string,
  containerStyle: any,
  textStyle: any,
  otherProps: any
};
TextInput.defaultProps = {
  placeholder: '',
  containerStyle: {},
  textStyle: {},
  otherProps: null
};

export default TextInput;
