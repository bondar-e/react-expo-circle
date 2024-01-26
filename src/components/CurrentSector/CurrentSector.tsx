import React from 'react';
import { View } from 'react-native';

import { Label } from 'components/shared/Label';
import { CurrentSectorProps } from './types';
import { styles } from './CurrentSector.styles';

const CurrentSector: React.FC<CurrentSectorProps> = ({ sector }) => {
  return (
    <View style={styles.container}>
      <Label>{`Current sector - ${sector ? sector?.id : 'rotate to see result'}`}</Label>
      {sector ? <View style={[styles.sectorColor, { backgroundColor: sector.color }]} /> : null}
    </View>
  );
};

export default CurrentSector;
