import React from 'react';
import {Alert, ScrollView, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
// import {LineChart} from 'react-native-charts-wrapper';

import LineChart from 'react-native-responsive-linechart';

export default class Actions extends React.Component {
  state = {
    loading: true,
    timer: null,
  };

  getValuesFromApi = async () => {
    try {
      const apiUrl =
        'https://api.thingspeak.com/channels/871668/feeds.json?api_key=081YONFH751939R7&sum=10&results=18';
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
    const data = [-10, -15, 40, 60, 78, 42, 56];
    const labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'];
    const config = {
      line: {
        visible: true,
        strokeWidth: 2,
        strokeColor: '#341f97',,
      },
      area: {
        visible: false,,
      },
      yAxis: {
        visible: true,
        labelFormatter: v => String(v) + ' °C',,
      },
      xAxis: {
        visible: true,,
      },
      grid: {
        stepSize: 15,,
      },
      insetY: 10,
      insetX: 10,,
    };

    return (
      <ScrollView style={{margin: 10}}>
        <Card style={{marginBottom: 10}}>
          <Card.Title title="Humidity" subtitle="Last 3 hours values" />
          <Card.Content>
            <LineChart
              style={{flex: 1}}
              config={config}
              data={data}
              xLabels={labels}
            />
            ;
          </Card.Content>
        </Card>
        <Card style={{marginBottom: 10}}>
          <Card.Title title="Humidity" subtitle="Last 3 hours values" />
          <Card.Content>
            <LineChart
              style={{flex: 1}}
              config={config}
              data={data}
              xLabels={labels}
            />
            ;
          </Card.Content>
        </Card>

        <Card style={{marginBottom: 10}}>
          <Card.Title title="Humidity" subtitle="Last 3 hours values" />
          <Card.Content>
            <LineChart
              style={{flex: 1}}
              config={config}
              data={data}
              xLabels={labels}
            />
            ;
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
