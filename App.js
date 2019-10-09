/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={{ fontSize: 22, marginBottom: '4%', fontWeight: 'bold' }}>theShartman<Text style={{color: 'red'}}>Roll</Text></Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Calculator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    width: '100%',
    height: '12%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  heading: {
    justifyContent: 'flex-end',
    height: '100%',
    alignItems: 'center',
    width: '100%',
  },
  container2: {
    width: '100%',
    height: '88%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});