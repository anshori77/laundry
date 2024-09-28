import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logika login di sini
    console.log('Login dengan:', email, password);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Register')} style={styles.link}>Daftar di sini</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Tambahkan styling di sini
});

export default LoginScreen;
