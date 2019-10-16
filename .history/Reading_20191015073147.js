import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {
  Avatar,
  DataTable,
  Card,
  ActivityIndicator,
  Colors,
  Button,
  Snackbar,
} from 'react-native-paper';

export default class Reading extends React.Component {
  state = {
    soil_moisture_percentage: '0',
    humidity: '0',
    temperature: '0',
    pHsensor: '0',
    Ecsensor: '0',
    Water_Level: '0',
    lastUpdated: new Date().toLocaleTimeString(),
    loading: true,
    timer: null,
    fanOnSnackbar: false,
    pumpOnSnackbar: false,
    fanOn: false,
    pumpOn: false,
  };

  getValuesFromApi = async () => {
    const apiUrl =
      'https://api.thingspeak.com/channels/871668/feeds.json?api_key=081YONFH751939R7&results=1';
    const res = await fetch(apiUrl);
    const {
      feeds: [results],
    } = await res.json();
    this.setState({
      soil_moisture_percentage: results.field1,
      humidity: results.field2,
      temperature: results.field3,
      pHsensor: results.field4,
      Ecsensor: results.field5,
      Water_Level: results.field6,
      lastUpdated: new Date().toLocaleTimeString(),
      loading: false,
    });
  };

  componentDidMount() {
    this.getValuesFromApi();
    let timer = setInterval(() => {
      this.getValuesFromApi();
    }, 600000);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({timer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  regulateWaterPump(type) {
    const message =
      type === 'off' ? 'Turn off water pump?' : 'Turn on water pump?';
    Alert.alert(
      'Regulate Water Content',
      message,
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            this.setState({pumpSnackbar: true});
            this.regulate('water');
          },
        },
      ],
      {cancelable: false},
    );
  }

  regulateFan(type) {
    const message = type === 'off' ? 'Turn off fan?' : 'Turn on fan?';
    Alert.alert(
      'Regulate Temperature',
      message,
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            this.setState({fanSnackbar: true});
            this.regulate('fan', type);
          },
        },
      ],
      {cancelable: false},
    );
  }

  regulate(type, action) {}

  render() {
    const lastReadingUpdate = `Last Reading at ${this.state.lastUpdated}`;
    return this.state.loading ? (
      <ActivityIndicator
        size="large"
        style={{marginTop: 60 + '%'}}
        animating={true}
        color={Colors.red800}
      />
    ) : (
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
                <DataTable.Cell numeric>
                  {this.state.humidity.trim()}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Soil Moisture</DataTable.Cell>
                <DataTable.Cell numeric>
                  {this.state.soil_moisture_percentage.trim()}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Temperature</DataTable.Cell>
                <DataTable.Cell numeric>
                  {this.state.temperature.trim()}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>PH sensor</DataTable.Cell>
                <DataTable.Cell numeric>
                  {this.state.pHsensor === null
                    ? 0
                    : this.state.pHsensor.trim()}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ec sensor</DataTable.Cell>
                <DataTable.Cell numeric>
                  {this.state.Ecsensor === null
                    ? 0
                    : this.state.Ecsensor.trim()}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Water Level Sensor</DataTable.Cell>
                <DataTable.Cell numeric>
                  {this.state.Water_Level === null
                    ? 0
                    : this.state.Water_Level.trim()}
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
        </Card>
        {this.state.fanOn ? (
          <Button
            icon="toys"
            mode="contained"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              marginTop: 20,
              marginLeft: 70,
              marginRight: 70,
              backgroundColor: 'red',
            }}
            onPress={() => this.regulateFan('off')}>
            Turn OFF Fan
          </Button>
        ) : (
          <Button
            icon="toys"
            mode="contained"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              marginTop: 20,
              marginLeft: 70,
              marginRight: 70,
              backgroundColor: '#d742f5',
            }}
            onPress={() => this.regulateFan('on')}>
            Turn on Fan
          </Button>
        )}

        {this.state.pumpOn ? (
          <Button
            icon="local-drink"
            mode="contained" // #f542c5
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              marginTop: 10,
              marginLeft: 70,
              marginRight: 70,
              backgroundColor: 'red',
            }}
            onPress={() => this.regulateWaterPump('off')}>
            Turn off Water Pump
          </Button>
        ) : (
          <Button
            icon="local-drink"
            mode="contained" // #f542c5
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              marginTop: 10,
              marginLeft: 70,
              marginRight: 70,
              backgroundColor: '#42f5b9',
            }}
            onPress={() => this.regulateWaterPump('on')}>
            Turn on Water Pump
          </Button>
        )}

        <Snackbar
          visible={this.state.fanSnackbar}
          onDismiss={() => this.setState({fanOnSnackbar: false})}>
          Turning on Fan
        </Snackbar>
        <Snackbar
          visible={this.state.pumpSnackbar}
          onDismiss={() => this.setState({pumpOnSnackbar: false})}>
          Turning on Water Pump
        </Snackbar>
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
