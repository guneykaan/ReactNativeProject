import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import OrderScreen from './pages/OrderScreen';
import ProductScreen from './pages/ProductScreen';
import CategoryScreen from './pages/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (

    
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});