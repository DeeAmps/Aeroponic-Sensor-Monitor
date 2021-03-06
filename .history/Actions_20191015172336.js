import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {LineChart} from 'react-native-charts-wrapper';

export default class Actions extends React.Component {
  render() {
    return (
      <ScrollView>
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
        <Card.Actions>
          <Text>
            Deprecated Gradle features were used in this build, making it
            incompatible with Gradle 6.0. Use '--warning-mode all' to show the
            individual deprecation warnings. See
            https://docs.gradle.org/5.5/userguide/command_line_interface.html#sec:command_line_warnings
          </Text>
        </Card.Actions>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
});
