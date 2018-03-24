import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SecondScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>secon screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SecondScreen;
