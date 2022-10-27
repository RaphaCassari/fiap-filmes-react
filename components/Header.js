import { useNavigation } from '@react-navigation/native';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { content } from '../data/mock';

export default function Header() {
  const navigation = useNavigation(); // Hook
  const mockData = content;
  return (
    <View>
      <Image style={styles.img} source={{ uri: 'https://image.tmdb.org/t/p/original/goqqfAipXMML3dJ5rgKs7SHGoKI.jpg' }} />
      <TouchableOpacity onPress={() => navigation.navigate('Detail', mockData)}>
        <Text style={styles.button}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
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
    marginTop: -15,
    zIndex: 999,
  },
});
