import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
 StackNavigator,
 TabNavigator,
 TabBarBottom
} from 'react-navigation';
import TaskFeed from './TaskFeed';
import GroupManager from './GroupManager';
import SecondScreen from './SecondScreen';
import ModalScreen from './ModalScreen';

const TaskFeedStack = StackNavigator(
  {
    TaskFeed : { screen: TaskFeed },
    SecondScreen : { screen: SecondScreen }
  },
  {
    initialRouteName: 'TaskFeed',
  }
);

const GroupManagerStack = StackNavigator(
  {
    GroupManager : { screen: GroupManager },
    SecondScreen : { screen: SecondScreen }
  },
  {
    initialRouteName: 'GroupManager',
  }
);

const RootStack = TabNavigator(
  {
    TaskFeed : {
      screen: TaskFeedStack
    },
    GroupFeed : {
      screen: GroupManagerStack
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

