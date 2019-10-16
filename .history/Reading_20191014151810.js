import React from 'react';
import {StyleSheet} from 'react-native';
import { List } from 'react-native-paper';

export default class Navbar extends React.Component {
  render() {
    return (
        <>
        <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
        </>
    ;)
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
