import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {LineChart} from 'react-native-charts-wrapper';

export default class Actions extends React.Component {
  render() {
    return (
      <ScrollView style={{margin: 10}}>
        <Card>
          <Card.Content>
            <LineChart
              style={{width: 100 + '%', height: 300}}
              data={{
                dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
              }}
            />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <LineChart
              style={{width: 100 + '%', height: 300}}
              data={{
                dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
              }}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <LineChart
              style={{width: 100 + '%', height: 300}}
              data={{
                dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
              }}
            />
          </Card.Content>
        </Card>
      </ScrollView>
    );
  }
}
