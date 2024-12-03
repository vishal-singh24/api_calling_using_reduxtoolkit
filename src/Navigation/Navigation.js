import { View, Text,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from '../components/ProductScreen';
import CartScreen from '../components/CartScreen';
import LoginScreen from '../components/LoginScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {

    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkToken();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }


  return (

    <NavigationContainer>
      <Stack.Navigator>

      {isLoggedIn ? (
          <>
            <Stack.Screen name='Product' component={ProductScreen} />
            <Stack.Screen
              name='Cart'
              component={CartScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen name='Login' component={LoginScreen} />
        )}

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Navigation