import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <Appbar style={styles.bottom}>
          <Appbar.Content
            titleStyle={styles.headline}
            title="Aeroponic Sensors Monitor"
          />
          <Appbar.Action icon="refresh" onPress={this.props.refresh} />
        </Appbar>
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
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
});
