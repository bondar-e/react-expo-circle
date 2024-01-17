import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { styles } from './TextInput.styles';
import { TextInputProps } from './types';

const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  textContentType = 'none',
  keyboardType,
  numberOfLines,
  defaultValue,
  autoFocus,
  onBlur,
  onChangeText,
  onFocus,
}) => {
  return (
    <RNTextInput
      value={value}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      textContentType={textContentType}
      keyboardType={keyboardType}
      defaultValue={defaultValue}
      autoFocus={autoFocus}
      onBlur={onBlur}
      onChangeText={onChangeText}
      onFocus={onFocus}
      style={styles.input}
    />
  );
};

export default TextInput;
