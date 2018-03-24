import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ModalScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is Modal</Text>
        <Button 
          onPress={() => this.props.navigation.goBack()}
          title='Dismiss'
        />
      </View>
    );
  }
}

export default ModalScreen;
