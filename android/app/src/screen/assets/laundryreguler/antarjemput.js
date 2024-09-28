import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [address, setAddress] = useState('');

  const handleRequestPickup = () => {
    console.log(`Permintaan antar jemput ke alamat: ${address}`);
    // console.log(`Permintaan antar jemput ke alamat: ${address}`);
    Alert.alert('Permintaan Dikirim', `Kami akan mengirimkan jemput ke alamat: ${address}`);
    setAddress(''); // Reset input Tambahkan logika untuk memproses permintaan di sini
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Layanan Antar Jemput Laundry</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan alamat Anda"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Request Antar Jemput" onPress={handleRequestPickup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default App;
