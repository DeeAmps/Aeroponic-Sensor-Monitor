import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

export default class Actions extends React.Component {
  render() {
    const lastReadingUpdate = `Last Reading at ${new Date().toLocaleTimeString()}`;
    return (
      <View style={{margin: 5}}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  headline: {
    color: 'red',
    textAlign: 'center',
  },
});
