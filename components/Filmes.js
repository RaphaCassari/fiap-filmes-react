import { View, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import useAxios from 'axios-hooks';

export default function Filmes() {
  const FilmesUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-BR`;
  const [{ data, loading }] = useAxios(FilmesUrl);
  if (loading) return <Text>Carregando filmes..</Text>;
  const Filmes = data.results;

  return <View>{<FlatList data={Filmes} initialNumToRender={7} renderItem={({ item }) => <Card content={item}></Card>} horizontal></FlatList>}</View>;
}
