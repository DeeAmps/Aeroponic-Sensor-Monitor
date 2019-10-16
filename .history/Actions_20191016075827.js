import React from 'react';
import {Alert, ScrollView, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {LineChart} from 'react-native-charts-wrapper';
import PureChart from 'react-native-pure-chart';

export default class Actions extends React.Component {
  state = {
    loading: true,
    timer: null,
    soil_moisture_data: [],
    humidity_data: [],
    temperature_data: [],
    phsensor_data: [],
    ecsensor_data: [],
    water_level_data: [],
  };

  getValuesFromApi = async () => {
    try {
      const apiUrl =
        'https://api.thingspeak.com/channels/871668/feeds.json?api_key=081YONFH751939R7&sum=10&days=1';
      const res = await fetch(apiUrl);
      const {feeds} = await res.json();

      const soil_moisture_data = [];
      const humidity_data = [];
      const temperature_data = [];
      const phsensor_data = [];
      const ecsensor_data = [];
      const water_level_data = [];
      feeds.forEach(feed => {
        soil_moisture_data.push({
          x: new Date(feed).toTimeString(),
          y: feed.field1 === null ? 0 : feed.field1,
        });
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
    let sampleData = [
      {x: '2018-01-01', y: 30},
      {x: '2018-01-02', y: 400},
      {x: '2018-01-03', y: 170},
      {x: '2018-01-04', y: 350},
      {x: '2018-01-05', y: 10},
    ];
    return (
      <ScrollView style={{margin: 10}}>
        <Card style={{marginBottom: 10}}>
          <Card.Title title="Humidity" subtitle="Last 3 hours values" />
          <Card.Content style={{margin: 10}}>
            <PureChart data={sampleData} type="line" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
});
