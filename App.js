import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>BIENVENIDOS AL CURSO DE REACT NATIVE</Text>
         <Card></Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
