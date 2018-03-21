import React, { Component } from 'react';
import { StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import { connect } from 'react-redux';

class Toolbar extends React.Component { 
  render() {
    return (
        <ToolbarAndroid
          style={styles.toolbar}
          titleColor="white"
          title="CheeseSquare"
        />
    );
  }
}

const styles = StyleSheet.create({
  toolbar : {
    height: 56,
    backgroundColor: "#673AB7",
    elevation: 4
  }
});

export default Toolbar;
