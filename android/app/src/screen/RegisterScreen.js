import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrasi dengan:', email, password);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Daftar" onPress={handleRegister} />
      <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Sudah punya akun? Login di sini</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Tambahkan styling di sini
});

export default RegisterScreen;
