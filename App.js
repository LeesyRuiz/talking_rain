import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#805AC3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text>Abcdefg...</Text>
    <Text>my name is...</Text>
    <Text>lisy : ) </Text>
  </View>
);

export default App;
