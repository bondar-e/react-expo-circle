import { StyleSheet } from 'react-native';
import { spacing } from 'theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: spacing(8),
  },
  sectorColor: {
    width: spacing(7),
    height: spacing(7),
    marginLeft: spacing(),
    borderRadius: spacing(4),
  },
});
