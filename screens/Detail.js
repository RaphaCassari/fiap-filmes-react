import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-web';

export default function Detail({ route }) {
  const navigation = useNavigation();
  const contentSelected = route.params;
  const posterUri = 'https://image.tmdb.org/t/p/w400' + contentSelected.poster_path;

  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={{ uri: posterUri }}></Image>
      <View style={styles.contentInformations}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{contentSelected.original_name || contentSelected.original_title}</Text>
          <Text style={styles.vote}>
            <MaterialIcons name='star' color='gold' size={25}></MaterialIcons>
            {contentSelected.vote_average.toFixed(1)}
          </Text>
        </View>
        <Text style={styles.text}>{contentSelected.overview}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.button}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d'
  },
  contentInformations: {
    paddingHorizontal: 10,
    height: '100%',
  },
  text: {
    color: '#fff',
    marginVertical: 15,
  },
  button: {
    color: '#fff',
    backgroundColor: '#F06',
    padding: 6,
    textAlign: 'center',
    width: 180,
    alignSelf: 'center',
    borderRadius: 6,
    overflow: 'hidden',
    zIndex: 999,
  },
  titleContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifycontent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#fff',
  },
  poster: {
    width: '100%',
    height: '50%',
  },
  vote: {
    color: '#fff',
    opacity: 0.8,
    margin: 6,
    fontSize: 20,
  },
});
