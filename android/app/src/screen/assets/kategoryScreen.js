import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Kategori</Text>
      <Button title="Baju" onPress={() => navigation.navigate('Laundry Service')} />
      <Button title="Jaket" onPress={() => navigation.navigate('Laundry Service')} />
      <Button title="Sepatu" onPress={() => navigation.navigate('Laundry Service')} />
      <Button title="Tas" onPress={() => navigation.navigate('Laundry Service')} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Tambahkan styling di sini
});

export default kategoryScreen;
