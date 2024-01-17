import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { CircleProps } from './types';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useDeferredValue, useMemo } from 'react';
import { Svg } from 'react-native-svg';
import { View } from 'react-native';

import { CircleSectors } from './components';
import { getCircleSize, getSectors } from 'utils/circleUtils';
import { Pointer } from 'components/Pointer';
import { styles } from './Circle.styles';

const CIRCLE_SIZE = getCircleSize();

const Circle: React.FC<CircleProps> = ({ numberOfSectors = 1, changeCurrentSector }) => {
  const sectorArcDeg = useDeferredValue(360 / numberOfSectors);

  const spinValue = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${spinValue.value}deg` }],
    };
  });

  const sectors = useMemo(() => getSectors(numberOfSectors), [numberOfSectors]);

  const handleCurrentSector = (value: number) => {
    const rotationDeg = parseInt(value.toFixed(), 10);
    const sectorIndex = Math.abs(Math.floor(rotationDeg / sectorArcDeg) - numberOfSectors) - 1;

    changeCurrentSector(sectors[sectorIndex]);
  };

  const easing = Easing.bezier(0.23, 1, 0.32, 1);
  const gesture = Gesture.Pan().onUpdate((e) => {
    spinValue.value = withTiming(
      Math.abs(e.velocityY) / 4 + spinValue.value,
      {
        duration: 5000,
        easing: easing,
      },
      (finished) => {
        if (finished) {
          runOnJS(handleCurrentSector)(spinValue.value % 360);
        }
      }
    );
  });

  return (
    <View style={styles.root}>
      <Pointer />
      <GestureHandlerRootView style={styles.gestureView}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={animatedStyles}>
            <Svg height={CIRCLE_SIZE} width={CIRCLE_SIZE} viewBox="-1 -1 2 2" style={styles.circle}>
              <CircleSectors sectors={sectors} />
            </Svg>
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
};

export default Circle;
