/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import PureChart from 'react-native-pure-chart';
import _ from 'lodash';
import moment from 'moment';

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
  // 2019-10-16T00:00:00Z
  getValuesFromApi = async () => {
    this.setState({loading: true});
    try {
      const apiUrl = `https://api.thingspeak.com/channels/871668/feeds.json?api_key=081YONFH751939R7&sum=180&results=18$=&start=${moment().format(
        'YYYY-MM-DD',
      ) + 'T00:00:00Z'}`;
      const res = await fetch(apiUrl);
      let {feeds} = await res.json();
      feeds = _.orderBy(feeds, ['created_at'], ['asc']);
      feeds = _.slice(feeds, 0, 19);
      console.log(feeds);
      const soil_moisture_data = [];
      const humidity_data = [];
      const temperature_data = [];
      const phsensor_data = [];
      const ecsensor_data = [];
      const water_level_data = [];

      feeds.forEach(feed => {
        soil_moisture_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y:
            feed.field1 === null
              ? parseFloat(0)
              : parseFloat(feed.field1.trim()),
        });
        humidity_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y:
            feed.field2 === null
              ? parseFloat(0)
              : parseFloat(feed.field2.trim()),
        });
        temperature_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y:
            feed.field3 === null
              ? parseFloat(0)
              : parseFloat(feed.field3.trim()),
        });
        phsensor_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y:
            feed.field4 === null
              ? parseFloat(0)
              : parseFloat(feed.field4.trim()),
        });
        ecsensor_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y:
            feed.field5 === null
              ? parseFloat(0)
              : parseFloat(feed.field5.trim()),
        });
        water_level_data.push({
          x: new Date(feed.created_at).toLocaleTimeString(),
          y:
            feed.field6 === null
              ? parseFloat(0)
              : parseFloat(feed.field6.trim()),
        });
      });
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
      console.log(e);
      Alert.alert(
        'Network Error',
        'Please check your internet connectivity and retry again!',
        [
          {
            text: 'Retry',
            onPress: () => this.getValuesFromApi(),
          },
          {text: 'OK', onPress: () => null},
        ],
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
    return this.state.loading ? (
      <ActivityIndicator
        size="large"
        style={{marginTop: 60 + '%'}}
        animating={true}
      />
    ) : (
      <>
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
        <FAB
          style={styles.fab}
          small
          icon="loop"
          onPress={() => this.getValuesFromApi()}
        />
      </>
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
