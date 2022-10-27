import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o app</Text>
      <Text style={styles.text}>FIAP Filmes Mobile</Text>
      <Text style={styles.text}>Equipe:</Text>
      <Text style={styles.alunoInfo}>Raphael Cassari Benedicto - RM 85454</Text>
      <Text style={styles.alunoInfo}>Cintia Duarte da Silva – RM 84046</Text>
      <Text style={styles.alunoInfo}>Bruno Rocha de Carvalho – RM 84253</Text>
      <Text style={styles.alunoInfo}>João Rafael Galhardo Rui - 82114</Text>
      <Text style={styles.alunoInfo}>Caio Henrique Azar de Moura – RM 85771</Text>
      <Text style={styles.alunoInfo}>Vinicius Parreira Martinelli – RM 85828</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    padding: 8,
    alignItems: 'center',
    justifycontent: 'center',
  },
  title: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 20,
  },
  alunoInfo: {
    color: 'white',
  },
});
