import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PickupServiceScreen = () => {
  const [address, setAddress] = useState('');

  const handleRequestPickup = () => {
    console.log(`Permintaan antar jemput ke alamat: ${address}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Layanan Antar Jemput</Text>
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
  // Tambahkan styling di sini
});

export default PickupServiceScreen;
