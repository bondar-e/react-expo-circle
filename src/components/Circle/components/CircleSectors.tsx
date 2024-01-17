import React from 'react';
import { Path } from 'react-native-svg';

import { CircleSectorProps } from './types';

const CircleSectors: React.FC<CircleSectorProps> = ({ sectors }) => {
  return (
    <>
      {sectors.map(({ startX, startY, endX, endY, largeArcFlag, color, id }) => {
        const path = [`M ${startX} ${startY}`, `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, 'L 0 0'].join(' ');

        return <Path d={path} fill={color} key={path} id={`${id}`} />;
      })}
    </>
  );
};

export default CircleSectors;
