import React, { Component } from 'react';
import { Text } from 'react-native';
import ScreenView from 'components/screen_view';

export default class Second extends Component {
  state = {};
  render() {
    return (
      <ScreenView>
        <Text>second</Text>
      </ScreenView>
    );
  }
}
