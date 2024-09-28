import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DATA = [
  { id: '1', item: 'Baju Reguler', price: 'Rp 10.000' },
  { id: '2', item: 'Baju Ekspres', price: 'Rp 20.000' },
  { id: '3', item: 'Celana Reguler', price: 'Rp 15.000' },
  { id: '4', item: 'Celana Ekspres', price: 'Rp 30.000' },
];

const daftarhargascreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.item}</Text>
      <Text style={styles.priceText}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Harga Laundry</Text>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Tambahkan styling di sini
});

export default daftarhargascreen;
