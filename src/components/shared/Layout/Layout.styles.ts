import { StyleSheet } from 'react-native';
import { spacing } from 'theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingVertical: spacing(5),
    paddingHorizontal: spacing(6),
  },
});
