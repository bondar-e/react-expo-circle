import React from 'react';
import { View } from 'react-native';

import { Label } from 'components/Label';
import { CurrentSectorProps } from './types';
import { styles } from './CurrentSector.styles';

const CurrentSector: React.FC<CurrentSectorProps> = ({ sector }) => {
  return (
    <View style={styles.container}>
      {sector ? (
        <>
          <Label>{`Current sector - ${sector?.id}`}</Label>
          <View style={[styles.sectorColor, { backgroundColor: sector.color }]} />
        </>
      ) : (
        <Label>Set sector numbers and spin the circle</Label>
      )}
    </View>
  );
};

export default CurrentSector;
