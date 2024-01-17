import { StyleSheet } from 'react-native';
import { colors, spacing } from 'theme';

export const styles = StyleSheet.create({
  input: {
    padding: spacing(2),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: spacing(2),
    fontSize: 16,
  },
});
