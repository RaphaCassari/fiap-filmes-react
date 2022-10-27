import { Text, StyleSheet, View } from 'react-native';

export default function Title(props) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  titleContainer: {
    borderStyle: 'solid',
    borderColor: '#f06',
    marginTop: '20px',
    marginVertical: 10,
    borderRadius: 1,
    borderLeftWidth: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 4,
  }
});
