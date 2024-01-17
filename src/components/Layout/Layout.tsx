import { SafeAreaView, View } from 'react-native';
import React from 'react';
import { LayoutProps } from './types';
import { styles } from './Layout.styles';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
