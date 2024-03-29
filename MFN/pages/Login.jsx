import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import React, {useContext, useState} from 'react';
import m from '../assets/img/login.jpg';
import {LoginUser} from '../utils/api';
import {useMutation} from 'react-query';
import {CredentialsContext} from '../components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginSecrin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {storedCredentials, setStoredCredentials} =
    useContext(CredentialsContext);

  const {mutate, isLoading} = useMutation(LoginUser, {
    onSuccess: data => {
      persisLogin(data);
      navigation.navigate('Pages', {screen: 'Home'});
    },
    onError: error => {
      Alert.alert('Error', error.response.data.message);
    },
    isLoadig: setTimeout(() => {
      return isLoading;
    }, 1000),
  });

  const persisLogin = async data => {
    AsyncStorage.setItem('token', JSON.stringify(data.token))
      .then(() => {
        setStoredCredentials(data.token);
      })
      .catch(error => {
        console.error(error);
      });
  };
  // console.log(storedCredentials);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginLeft: 10,
        }}>
        <Text
          style={{
            color: '#38786D',
            fontSize: 30,
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: 15,
          }}>
          Login
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: 15,
            maxWidth: '60%',
            marginBottom: 20,
          }}>
          Welcome Back you've been missed!
        </Text>
      </View>
      <Image
        source={m}
        style={{
          width: 350,
          height: 350,
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Pressable
        onPress={() => mutate({email, password})}
        style={styles.button}>
        <Text style={styles.buttonTitle}>Login</Text>
      </Pressable>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.footerLink}>
            Sign up
          </Text>
        </Text>
        {/* <Text
                    onPress={() => onResetPasswordPress()} style={styles.footerLink}>Forgot Password?</Text> */}
      </View>
      {/* <Text>
        {isLoading ? 'Loading...' : 'Not Loading'}
      </Text> */}
      <Text
        onPress={() =>
          navigation.navigate('Landing')
        }>
        Back
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: 350,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
    padding: 15,
  },
  button: {
    backgroundColor: '#38786D',
    width: 350,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#38786D',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'black',
  },
  footerLink: {
    color: '#38786D',
    fontWeight: 'bold',
    fontSize: 16,
    shadowColor: '#000',
    elevation: 50,
  },
});
