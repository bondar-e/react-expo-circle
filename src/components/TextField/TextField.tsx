import React from 'react';
import { View } from 'react-native';

import { Label } from 'components/Label';
import { TextInput } from 'components/TextInput';
import { Spacer } from 'components/Spacer';
import { TextFieldProps } from './types';
import { styles } from './TextField.styles';

const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  return (
    <View style={styles.root}>
      <Label>{label}</Label>
      <Spacer size={2} />
      <TextInput {...props} />
    </View>
  );
};

export default TextField;
