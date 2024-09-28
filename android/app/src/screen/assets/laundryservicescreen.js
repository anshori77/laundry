import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LaundryServiceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Layanan Laundry</Text>
      <Button title="Laundry Reguler" onPress={() => navigation.navigate('Price List')} />
      <Button title="Laundry Ekspres" onPress={() => navigation.navigate('Price List')} />
      <Button title="Request Antar Jemput" onPress={() => navigation.navigate('Pickup Service')} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Tambahkan styling di sini
});

export default LaundryServiceScreen;
