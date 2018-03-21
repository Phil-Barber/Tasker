import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import TaskerStatusBar from './TaskerStatusBar';
import Toolbar from './Toolbar';

class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <TaskerStatusBar />
        <Toolbar />
        <View style={styles.container}>
          <Text>working with redux!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
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

function mapStateToProps(state) {

  return { 
  };
}

export default connect(mapStateToProps)(App)

