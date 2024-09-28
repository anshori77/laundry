import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {}
  return (
    <NavigationContainer>{<Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Laundry Service" component={LaundryServiceScreen} />
      <Stack.Screen name="Price List" component={PriceListScreen} />
      <Stack.Screen name="Pickup Service" component={PickupServiceScreen} />
    </Stack.Navigator>}
  </NavigationContainer>
); 
