import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import { FavoritesContext } from '../contexts/FavoritesContext';
import Constants from 'expo-constants';
import Title from '../components/Title';

export default function Favoritos() {
  const { favorites, quantity } = useContext(FavoritesContext);

  if (quantity === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Adicione um filme ou série à sua lista de favoritos para ser exibido aqui.</Text>
      </View>
    );
  }

  const Filmes = favorites.filter((content) => content.media_type === 'movie');
  const Series = favorites.filter((content) => content.media_type === 'tv');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <Text style={styles.text}>{'Quantidade de favoritos: ' + quantity}</Text>
      <View style={Filmes.length ? { display: 'block' } : { display: 'none' }}>
        <Title text='Filmes'></Title>
        <FlatList data={Filmes} renderItem={({ item }) => <Card content={item}></Card>} horizontal></FlatList>
      </View>
      <View style={Series.length ? { display: 'block' } : { display: 'none' }}>
        <Title text='Séries'></Title>
        <FlatList data={Series} renderItem={({ item }) => <Card content={item}></Card>} horizontal></FlatList>
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
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
});
