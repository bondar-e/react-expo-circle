import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.4,
  },
  disabled: { pointerEvents: 'none' },
  circle: {
    transform: [{ rotate: '-90deg' }],
  },
  gestureView: {
    flex: 1,
  },
});
