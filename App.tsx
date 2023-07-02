import * as React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Screens from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <Screens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
