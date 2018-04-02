import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

const cardData =   {
  title: 'AVENGERS INFINITY WAR',
  image: 'https://www.revistawelldone.cl/wp-content/uploads/2017/12/avengersinfinitywar-1494357736132_1280w.jpg',
  description: 'Avengers: Infinity War es una película estadounidense de superhéroes de 2018 basada en el equipo de superhéroes de Marvel Comics Los Vengadores, producida por Marvel Studios y distribuida por Walt Disney Studios Motion Pictures.',
  url: 'https://www.youtube.com/watch?v=PhUMUr1q22c',
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>BIENVENIDOS AL CURSO DE REACT NATIVE</Text>
         <Card
          title={cardData.title}
          description={cardData.description}
          image={cardData.image}>
          </Card>
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
