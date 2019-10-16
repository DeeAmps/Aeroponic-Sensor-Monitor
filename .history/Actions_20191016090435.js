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
    console.log('called');
    try {
      const apiUrl =
        'https://api.thingspeak.com/channels/871668/feeds.json?api_key=081YONFH751939R7&sum=10&days=1&results=15';
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
          x: new Date(feed.created_at).toLocaleTimeString(),
          y: feed.field1 === null ? parseFloat(0) : parseFloat(feed.field1),
        });
        humidity_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y: feed.field2 === null ? parseFloat(0) : parseFloat(feed.field2),
        });
        temperature_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y: feed.field3 === null ? parseFloat(0) : parseFloat(feed.field3),
        });
        phsensor_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y: feed.field4 === null ? parseFloat(0) : parseFloat(feed.field4),
        });
        ecsensor_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y: feed.field5 === null ? parseFloat(0) : parseFloat(feed.field5),
        });
        water_level_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y: feed.field6 === null ? parseFloat(0) : parseFloat(feed.field6),
        });
      });
      console.log(soil_moisture_data);
      this.setState({
        soil_moisture_data,
        humidity_data,
        temperature_data,
        phsensor_data,
        ecsensor_data,
        water_level_data,
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
          <Card.Title title="Soil Moisture" subtitle="Last 3 hours values" />
          <Card.Content>
            <PureChart
              style={{margin: 10}}
              data={this.state.soil_moisture_data}
              type="line"
            />
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
