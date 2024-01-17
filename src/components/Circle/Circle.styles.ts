import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    transform: [{ rotate: '-90deg' }],
  },
  gestureView: {
    flex: 1,
  },
});
