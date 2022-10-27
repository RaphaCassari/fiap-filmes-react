import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useContext, useState } from 'react';

import { FavoritesContext } from '../contexts/FavoritesContext';
import { UltimoVistoContext } from '../contexts/UltimoVistoContext';

export default function Card({ content }) {
  const navigation = useNavigation();
  const { isFavorito } = useContext(FavoritesContext);
  const [favorite, setFavorite] = useState(false);

  function favoritar() {
    setFavorite(!favorite);
    isFavorito(content);
  }

  const { newUltimoVisto } = useContext(UltimoVistoContext);

  const posterUri = 'https://image.tmdb.org/t/p/w200' + content.poster_path;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', content);
        newUltimoVisto(content);
      }}
    >
      <View style={styles.card}>
        <TouchableOpacity onPress={() => favoritar()}>
          <MaterialIcons
            style={styles.favorite}
            size={20}
            name={favorite ? 'favorite' : 'favorite-border'}
            color={favorite ? 'red' : 'white'}
          ></MaterialIcons>
        </TouchableOpacity>
        <Image style={styles.poster} source={{ uri: posterUri }}></Image>
        <Text style={styles.vote}>
          <MaterialIcons name='star' color='gold' size={16}></MaterialIcons>
          {content.vote_average.toFixed(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    height: 170,
    width: 100,
    backgroundColor: '#111',
    borderRadius: 6,
    justifycontent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
  },
  poster: {
    width: '100%',
    height: 141,
    borderRadius: 6,
  },
  vote: {
    color: '#fff',
    opacity: 0.8,
    margin: 6,
  },
  favorite: {
    position: 'absolute',
    zIndex: 1,
    right: 60,
    top: 5,
  },
});
