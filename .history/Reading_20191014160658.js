import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, DataTable, Card} from 'react-native-paper';

export default class Reading extends React.Component {
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
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Reading Type</DataTable.Title>
                <DataTable.Title numeric>Reading Value</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>Humidity</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Soil Moisture</DataTable.Cell>
                <DataTable.Cell numeric>2345</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Temperature</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>PH sensor</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ec sensor</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Water Level Sensor</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
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
