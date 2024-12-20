import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/LoginSlice';

const LoginScreen = () => {
   const [username, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const navigation = useNavigation();
   const dispatch = useDispatch()
   const data = useSelector(state => state.auth);
   console.log(" userToken:", data.userToken);

   const handleLogin = () => {
      dispatch(login({ username, password }));
      // if(data.userToken){
      //    navigation.replace('Product')
      // }
   };

   useEffect(() => {
      if (data.userToken) {
         navigation.replace('Product');
      }
   }, [data.userToken, navigation]);

   

   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <TextInput placeholder='Enter user name' style={{ borderWidth: 1, height: 50, width: '80%',paddingLeft:20,borderRadius:20 }}
            onChangeText={
               setUserName}
         />
         <TextInput placeholder='Enter Password' style={{ borderWidth: 1, height: 50, width: '80%', marginTop: 20,paddingLeft:20,borderRadius:20 }}
            onChangeText={
               setPassword
            }
         />
         <TouchableOpacity style={{ marginTop: 30, backgroundColor: 'black', width: '40%', height: 40, justifyContent: 'center', alignItems: 'center' }}
            onPress={handleLogin}
         >
            <Text style={{ color: 'white' }}>
               Login
            </Text>
         </TouchableOpacity>
      </View>
   )
}

export default LoginScreen

const styles = StyleSheet.create({})