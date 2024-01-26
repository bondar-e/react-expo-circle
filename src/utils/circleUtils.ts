import { Platform } from 'react-native';
import { colors } from 'theme';

const getCoordinatesForPercent = (percent: number) => {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);

  return [x, y];
};

const getRandomColor = () => `#${(((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')}`;

const getSectors = (numberOfSectors: number) => {
  const sectors = [];

  if (numberOfSectors <= 0) {
    return [];
  }

  let totalPercentage = 0;
  const sectorPercent = 1 / numberOfSectors;

  for (let i = 0; i < numberOfSectors; i += 1) {
    const [startX, startY] = getCoordinatesForPercent(totalPercentage);
    totalPercentage += sectorPercent;
    const [endX, endY] = getCoordinatesForPercent(totalPercentage);
    const largeArcFlag = sectorPercent > 0.5 ? 1 : 0;
    const color = numberOfSectors === 1 ? colors.black : getRandomColor();

    sectors.push({
      id: i + 1,
      largeArcFlag,
      startX,
      startY,
      endX,
      endY,
      color,
    });
  }

  return sectors;
};

const getCurrentSectorIndex = (rotationDeg: number, sectorArcDeg: number, numberOfSectors: number) => {
  return Math.abs(Math.floor(rotationDeg / sectorArcDeg) - numberOfSectors) - 1;
};

const getCircleSize = () => {
  return Platform.select({
    ios: 300,
    android: 300,
    web: 600,
  });
};

export { getSectors, getCircleSize, getCurrentSectorIndex };
