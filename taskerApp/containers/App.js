import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
 StackNavigator,
 TabNavigator,
 TabBarBottom
} from 'react-navigation';
import Home from './Home';
import SecondScreen from './SecondScreen';
import ModalScreen from './ModalScreen';

const MainStack = StackNavigator(
  {
    Home : { screen: Home },
    SecondScreen : { screen: SecondScreen }
  },
  {
    initialRouteName: 'Home',
    headerBarTitle: 'hello'
  }
);

const RootStack = TabNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);

export default class App extends React.Component {
  render() {
     return <RootStack />;
  }
}

