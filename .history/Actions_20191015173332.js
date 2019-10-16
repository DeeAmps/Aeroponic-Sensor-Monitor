import React from 'react';
import {Alert, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import {LineChart} from 'react-native-charts-wrapper';

export default class Actions extends React.Component {
  state = {
    loading: true,
    timer: null,
  };

  getValuesFromApi = async () => {
    try {
      const apiUrl =
        'https://api.thingspeak.com/channels/871668/feeds.json?api_key=081YONFH751939R7&minutes=180';
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
    } catch (e) {
      Alert.alert(
        'Network Error',
        'Please check your internet connectivity and retry again!',
      );
    }
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

  render() {
    return (
      <ScrollView style={{margin: 10}}>
        <Card style={{marginBottom: 10}}>
          <Card.Title title="Humidity" subtitle="Last 3 hours values" />
          <Card.Content>
            <LineChart
              style={{width: 100 + '%', height: 300}}
              data={{
                dataSets: [
                  {
                    label: 'demo',
                    values: [
                      {y: 98.44, x: '2:28:06 PM'},
                      {y: 98.22, x: '2:38:06 PM'},
                      {y: 97.66, x: '2:48:06 PM'},
                      {y: 98.12, x: '2:58:06 PM'},
                      {y: 98.46, x: '3:18:06 PM'},
                      {y: 98.66, x: '3:28:06 PM'},
                      {y: 96.66, x: '3:38:06 PM'},
                    ],
                  },
                ],
              }}
            />
          </Card.Content>
        </Card>
        <Card style={{marginBottom: 10}}>
          <Card.Title title="Humidity" subtitle="Last 3 hours values" />
          <Card.Content>
            <LineChart
              style={{width: 100 + '%', height: 300}}
              data={{
                dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}],
              }}
            />
          </Card.Content>
        </Card>

        <Card style={{marginBottom: 10}}>
          <Card.Title title="Humidity" subtitle="Last 3 hours values" />
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
