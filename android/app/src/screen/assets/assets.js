import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const categories = [
  { name: 'Baju', image: require('./assets/shirt.png') },
  { name: 'Jaket', image: require('./assets/jacket.png') },
  { name: 'Sepatu', image: require('./assets/shoes.png') },
  { name: 'Tas', image: require('./assets/bag.png') },
];

const App = () => {
  const handlePress = (category) => {
    console.log(`Anda memilih kategori: ${category}`);
  };

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.category} onPress={() => handlePress(category.name)}>
          <Image source={category.image} style={styles.image} />
          <Text style={styles.text}>{category.name}</Text>
        </TouchableOpacity>
      ))}
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
  category: {
    alignItems: 'center',
    margin: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
