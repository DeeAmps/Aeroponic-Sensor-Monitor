import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {LineChart} from 'react-native-charts-wrapper';

export default class Actions extends React.Component {
  render() {
    return (
      <ScrollView>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <View style={styles.container}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
                }}
              />
            </View>
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <View style={styles.container}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
                }}
              />
            </View>
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <View style={styles.container}>
              <LineChart
                style={styles.chart}
                data={{
                  dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
                }}
              />
            </View>
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
