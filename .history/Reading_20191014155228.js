import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {DataTable, Badge} from 'react-native-paper';

export default class Reading extends React.Component {
  render() {
    return (
      <>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Reading Type</DataTable.Title>
                <DataTable.Title numeric>Reading Vale</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>Humidity</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Soil Moisture</DataTable.Cell>
                <DataTable.Cell numeric>
                  <Badge>3</Badge>
                </DataTable.Cell>
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
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
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
