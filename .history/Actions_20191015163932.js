import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Card} from 'react-native-paper';

export default class Actions extends React.Component {
  render() {
    const lastReadingUpdate = `Last Reading at ${new Date().toLocaleTimeString()}`;
    return (
      <>
        <Card>
          <Card.Title
            title={lastReadingUpdate}
            subtitle="Readings are updated every 10mins"
            left={props => <Avatar.Icon {...props} icon="alarm" />}
          />
          <Card.Content />
        </Card>
      </>
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
