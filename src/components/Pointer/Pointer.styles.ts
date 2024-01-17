import { StyleSheet } from 'react-native';
import { colors } from 'theme';

export const styles = StyleSheet.create({
  root: {
    marginBottom: -12,
    zIndex: 1,
  },
  web: {
    transform: 'rotate(135deg)',
  },
  native: {
    transform: [{ rotate: '135deg' }],
    shadowColor: colors['primary-100'],
    shadowRadius: 2,
    shadowOpacity: 1,
  },
});
