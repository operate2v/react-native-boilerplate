import React, { Component } from 'react';
import { View } from 'react-native';
import Rocket from 'react-native-vector-icons/FontAwesome';

export default class Icon extends Component {
  state = {};
  render() {
    return (
      <View>
        <Rocket name="rocket" size={30} color="#900" />
      </View>
    );
  }
}
