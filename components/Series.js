import { Text, FlatList } from 'react-native';
import Card from '../components/Card';
import useAxios from 'axios-hooks';

export default function Series() {
  const SeriesUrl = `https://api.themoviedb.org/3/trending/tv/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-BR`;
  const [{ data, loading }] = useAxios(SeriesUrl);
  if (loading) return <Text>Carregando séries..</Text>;
  const Series = data.results;

  return <FlatList data={Series} initialNumToRender={7} renderItem={({ item }) => <Card content={item}></Card>} horizontal></FlatList>;
}
