import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, DataTable, Card} from 'react-native-paper';

export default class Reading extends React.Component {
  state = {
    soil_moisture_percentage: 0,
    humidity: 0,
    temperature: 0,
    pHsensor: 0,
    Ecsensor: 0,
    Water_Level: 0,
    lastUpdated: new Date().toLocaleTimeString(),
  };

  getValuesFromApi = async () => {
    const apiUrl =
      'https://api.thingspeak.com/channels/871668/feeds.json?api_key=081YONFH751939R7&results=1';
    const res = await fetch(apiUrl);
    const {
      feeds: [results],
    } = res.json();
    this.setState({
      soil_moisture_percentage: results.field1,
      humidity: results.field2,
      temperature: results.field3,
      pHsensor: results.field4,
      Ecsensor: results.field5,
      Water_Level: results.field6,
      lastReadingUpdate: new Date().toLocaleTimeString(),
    });
    this.initiateContinuousUpdate();
  };

  initiateContinuousUpdate = () => {
    const timer = setInterval(async () => {
      const apiUrl =
        'https://api.thingspeak.com/channels/871668/feeds.json?api_key=081YONFH751939R7&results=1';
      const res = await fetch(apiUrl);
      console.log('RES', res);
      const {
        feeds: [results],
      } = res.json();
      this.setState({
        soil_moisture_percentage: results.field1,
        humidity: results.field2,
        temperature: results.field3,
        pHsensor: results.field4,
        Ecsensor: results.field5,
        Water_Level: results.field6,
        lastReadingUpdate: new Date().toLocaleTimeString(),
      });
    });
  };

  componentDidMount() {
    this.getValuesFromApi();
  }

  render() {
    const lastReadingUpdate = `Last Reading at ${this.state.lastUpdated}`;
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
                <DataTable.Cell numeric>{this.state.humidity}</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Soil Moisture</DataTable.Cell>
                <DataTable.Cell numeric>
                  {this.state.soil_moisture_percentage}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Temperature</DataTable.Cell>
                <DataTable.Cell numeric>
                  {this.state.temperature}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>PH sensor</DataTable.Cell>
                <DataTable.Cell numeric>{this.state.pHsensor}</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ec sensor</DataTable.Cell>
                <DataTable.Cell numeric>{this.state.Ecsensor}</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Water Level Sensor</DataTable.Cell>
                <DataTable.Cell numeric>
                  {this.state.Water_Level}
                </DataTable.Cell>
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
