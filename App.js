import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSet from './components/CardSet';
import cards from './data';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.welcome}>BIENVENIDOS AL CURSO DE REACT NATIVE</Text>
        <CardSet items={cards}></CardSet>
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
    marginTop: Constants.statusBarHeight,
  },
  welcome: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#000', 
    textAlign: 'center',
  }
});
