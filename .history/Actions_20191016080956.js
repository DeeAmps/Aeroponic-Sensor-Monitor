/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import {Card} from 'react-native-paper';
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
        humidity_data.push({
          x: new Date(feed).toTimeString(),
          y: feed.field2 === null ? 0 : feed.field2,
        });
        temperature_data.push({
          x: new Date(feed).toTimeString(),
          y: feed.field3 === null ? 0 : feed.field3,
        });
        phsensor_data.push({
          x: new Date(feed).toTimeString(),
          y: feed.field4 === null ? 0 : feed.field4,
        });
        ecsensor_data.push({
          x: new Date(feed).toTimeString(),
          y: feed.field5 === null ? 0 : feed.field5,
        });
        water_level_data.push({
          x: new Date(feed).toTimeString(),
          y: feed.field6 === null ? 0 : feed.field6,
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
    return this.state.loading ? (
      <ActivityIndicator
        size="large"
        style={{marginTop: 60 + '%'}}
        animating={true}
        color={Colors.red800}
      />
    ) : (
      <ScrollView style={{margin: 10}}>
        <Card style={{marginBottom: 10}}>
          <Card.Title title="Soil Moisture" subtitle="Last 3 hours values" />
          <Card.Content style={{margin: 10}}>
            <PureChart data={this.state.soil_moisture_data} type="line" />
          </Card.Content>
        </Card>

        <Card style={{marginBottom: 10}}>
          <Card.Title title="Humidity" subtitle="Last 3 hours values" />
          <Card.Content style={{margin: 10}}>
            <PureChart data={this.state.humidity_data} type="line" />
          </Card.Content>
        </Card>

        <Card style={{marginBottom: 10}}>
          <Card.Title title="EC Sensor" subtitle="Last 3 hours values" />
          <Card.Content style={{margin: 10}}>
            <PureChart data={this.state.ecsensor_data} type="line" />
          </Card.Content>
        </Card>

        <Card style={{marginBottom: 10}}>
          <Card.Title title="PH Sensor" subtitle="Last 3 hours values" />
          <Card.Content style={{margin: 10}}>
            <PureChart data={this.state.phsensor_data} type="line" />
          </Card.Content>
        </Card>

        <Card style={{marginBottom: 10}}>
          <Card.Title title="Water Level" subtitle="Last 3 hours values" />
          <Card.Content style={{margin: 10}}>
            <PureChart data={this.state.water_level_data} type="line" />
          </Card.Content>
        </Card>

        <Card style={{marginBottom: 10}}>
          <Card.Title title="Temperature" subtitle="Last 3 hours values" />
          <Card.Content style={{margin: 10}}>
            <PureChart data={this.state.temperature_data} type="line" />
          </Card.Content>
        </Card>
      </ScrollView>
    );;
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
