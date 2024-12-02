import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from '../components/ProductScreen';
import CartScreen from '../components/CartScreen';
import LoginScreen from '../components/LoginScreen';

const Stack=createNativeStackNavigator();
const Navigation = () => {
  return (
    
    <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen
            name='Product' component={ProductScreen}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='Cart' component={CartScreen}
            options={{headerShown:false}}
            />

        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default Navigation