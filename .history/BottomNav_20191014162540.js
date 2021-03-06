import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Reading from './Reading';
import Actions from './Actions';

export default class BottomNav extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'reading', title: 'Reading', icon: 'queue-music'},
      {key: 'action', title: 'Action', icon: 'album'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    reading: Reading,
    action: Actions,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
