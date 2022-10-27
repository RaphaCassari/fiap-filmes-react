import React from 'react';
import { StyleSheet, View } from 'react-native';

import Title from '../components/Title';
import Header from '../components/Header';
import Filmes from '../components/Filmes';
import Series from '../components/Series';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <Title text='Filmes em alta'></Title>
        <Filmes></Filmes>
        <Title text='Séries em alta'></Title>
        <Series></Series>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d'
  },
  content: {
    padding: 8,
  },
});
