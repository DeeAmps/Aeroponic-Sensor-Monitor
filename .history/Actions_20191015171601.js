import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
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
<LineChart
              style={styles.chart}
              data={{
                dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
              }}
            />

          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
 <LineChart
              style={styles.chart}
              data={{
                dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
              }}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
<LineChart
              style={styles.chart}
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
