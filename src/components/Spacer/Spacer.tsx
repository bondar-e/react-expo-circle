import React from 'react';
import { View } from 'react-native';

import { SpacerProps } from './types';
import { getSpacerStyle } from './utils';

const Spacer: React.FC<SpacerProps> = ({ size }) => {
  return <View style={getSpacerStyle(size)} />;
};

export default Spacer;
