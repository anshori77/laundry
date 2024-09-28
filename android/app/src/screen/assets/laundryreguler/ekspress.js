import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const handleServiceSelect = (service) => {
    console.log(`Anda memilih layanan: ${service}`);
    // const RegularLaundryScreen = () => {Tambahkan logika untuk memproses pilihan layanan di sini
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Layanan Laundry</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleServiceSelect('Laundry Reguler')}>
        <Text style={styles.buttonText}>Laundry Reguler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleServiceSelect('Laundry Ekspres')}>
        <Text style={styles.buttonText}>Laundry Ekspres</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
