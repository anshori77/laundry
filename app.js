import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CategoryScreen from './screens/CategoryScreen';
import LaundryServiceScreen from './screens/LaundryServiceScreen';
import PriceListScreen from './screens/PriceListScreen';
import PickupServiceScreen from './screens/PickupServiceScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Laundry Service" component={LaundryServiceScreen} />
        <Stack.Screen name="Price List" component={PriceListScreen} />
        <Stack.Screen name="Pickup Service" component={PickupServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
 



