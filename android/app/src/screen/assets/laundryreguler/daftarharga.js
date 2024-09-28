import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DATA = [
  { id: '1', item: 'Baju', price: 'Rp 10.000' },
  { id: '2', item: 'Celana', price: 'Rp 15.000' },
  { id: '3', item: 'Jaket', price: 'Rp 20.000' },
  { id: '4', item: 'Tas', price: 'Rp 25.000' },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.item}</Text>
      <Text style={styles.priceText}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Harga Laundry</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
