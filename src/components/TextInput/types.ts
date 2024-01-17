import { TextInputProps as RNTextInputProps } from 'react-native';

export type TextInputProps = Pick<
  RNTextInputProps,
  | 'value'
  | 'numberOfLines'
  | 'keyboardType'
  | 'textContentType'
  | 'numberOfLines'
  | 'placeholder'
  | 'defaultValue'
  | 'autoFocus'
  | 'onChangeText'
  | 'onBlur'
  | 'onFocus'
>;
