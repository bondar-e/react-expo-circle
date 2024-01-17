import React from 'react';
import { Text } from 'react-native';

import { LabelProps } from './types';
import { styles } from './Label.styles';

const Label: React.FC<LabelProps> = ({ children }) => {
  return <Text style={styles.root}>{children}</Text>;
};

export default Label;
