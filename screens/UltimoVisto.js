import React, { useContext } from 'react';
import { UltimoVistoContext } from '../contexts/UltimoVistoContext';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Constants from 'expo-constants';
import Title from '../components/Title';

export default function UltimoVisto() {
  const { FilmesUltimoVisto, SeriesUltimoVisto } = useContext(UltimoVistoContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos conteúdos acessados</Text>
      <View style={FilmesUltimoVisto.length ? { display: 'block' } : { display: 'none' }}>
        <Title text='Filmes'></Title>
        <FlatList data={FilmesUltimoVisto} renderItem={({ item }) => <Card content={item}></Card>} horizontal></FlatList>
      </View>
      <View style={SeriesUltimoVisto.length ? { display: 'block' } : { display: 'none' }}>
        <Title text='Séries'></Title>
        <FlatList data={SeriesUltimoVisto} renderItem={({ item }) => <Card content={item}></Card>} horizontal></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    padding: 15,
    paddingTop: Constants.statusBarHeight + 15,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
});
