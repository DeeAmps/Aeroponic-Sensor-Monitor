import React from 'react';
import {AppRegistry, StyleSheet, Text, View, processColor} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {LineChart} from 'react-native-charts-wrapper';

export default class Actions extends React.Component {
  render() {
    return (
      <>
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <LineChart
              style={styles.chart}
              data={{
                dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
              }}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
});
