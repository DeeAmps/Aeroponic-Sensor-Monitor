import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Button} from 'react-native-paper';

export default class Actions extends React.Component {
  render() {
    const lastReadingUpdate = `Last Reading at ${new Date().toLocaleTimeString()}`;
    return (
      <View style={{margin: 50}}>
        <Button
          icon="camera"
          mode="contained"
          style={{marginBottom: 10, height: 80}}
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
        <Button
          icon="camera"
          mode="contained"
          style={{height: 80}}
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
        <TouchableOpacity
          style={{
            height: 100,
            marginTop: 10,
            backgroundColor: 'red',
            textAlign: 'center',
          }}>
          <Text>My button</Text>
        </TouchableOpacity>
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
