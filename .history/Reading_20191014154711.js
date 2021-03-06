import React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

export default class Reading extends React.Component {
  render() {
    return (
      <>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Reading Type</DataTable.Title>
            <DataTable.Title numeric>Reading Vale</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Frozen yogurt</DataTable.Cell>
            <DataTable.Cell numeric>159</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>

      </DataTable>
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
