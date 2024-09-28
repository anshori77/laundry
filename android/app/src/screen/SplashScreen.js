import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';

const SplashScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ).start();
    setTimeout(() => {
      // Navigate to the main app screen
    }, 3000);
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Image
        source={require('../images/laundry_logo.png')}
        style={{ transform: [{ rotate: spin }] }}
      />
    </View>
  );
};

export default SplashScreen;