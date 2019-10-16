import React from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {LineChart} from 'react-native-charts-wrapper';

export default class Actions extends React.Component {
  render() {
    return (

      <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
    <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  <Card>
  <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
  <Card.Content>
    <Title>Card title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Actions>
    <Button>Cancel</Button>
    <Button>Ok</Button>
  </Card.Actions>
</Card>
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
