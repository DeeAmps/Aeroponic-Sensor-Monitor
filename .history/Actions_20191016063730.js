import React from 'react';
import {Alert, ScrollView, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {LineChart} from 'react-native-charts-wrapper';
import {ECharts} from 'react-native-echarts-wrapper';

export default class Actions extends React.Component {
  state = {
    loading: true,
    timer: null,
  };

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
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
    return (
      <ScrollView style={{margin: 10}}>
        <Card style={{marginBottom: 10}}>
          <Card.Title title="Humidity" subtitle="Last 3 hours values" />
          <Card.Content>
            <ECharts
              style={{width: 100 + '%'}}
              option={this.option}
              backgroundColor="rgba(93, 169, 81, 0.3)"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
});
