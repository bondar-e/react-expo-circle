import React from 'react';
import { View } from 'react-native';

import { Label } from 'components/shared/Label';
import { TextInput } from 'components/shared/TextInput';
import { Spacer } from 'components/shared/Spacer';
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
