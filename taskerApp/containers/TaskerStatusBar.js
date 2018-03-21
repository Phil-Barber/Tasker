import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  ToolbarAndroid,
  Platform
} from 'react-native';

class TaskerStatusBar extends React.Component {
  render() {
    return (
      <View>
        <StatusBar 
          translucent
          backgroundColor='rgba(0, 0, 0, 0.2)'
          animated
        />
        { Platform.OS === 'android' && Platform.Version >= 20 ?  
          <View style={styles.androidStyle} />
          : null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidStyle: {
      height: 24,
      backgroundColor: "#512DA8"
  },
  statusBar: {
    height: 100,
    backgroundColor: "blue",
  }
});

export default TaskerStatusBar;
