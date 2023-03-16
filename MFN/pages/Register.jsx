import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useMutation} from 'react-query';
import {CredentialsContext} from '../components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RegisterUser} from '../utils/api';

export default function RegisterScreen({navigation}) {
  const [companyName, setCompanyName] = useState('');
  // const [founder, setfounder] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState(null);

  const {storedCredentials, setStoredCredentials} =
    useContext(CredentialsContext);

  const {mutate, isLoadig} = useMutation(RegisterUser, {
    onSuccess: data => {
      persisLogin(data);
      navigation.navigate('Pages', {screen: 'Home'});
    },
    onError: error => {
      Alert.alert('Error', error.response.data.message);
    },
    isLoadig: setTimeout(() => {
      return isLoadig;
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

  const handleSelectLocation  = () => {
    navigation.navigate('Map', {handleLocationSelect });
  };
  console.log(location);

  const handleLocationSelect  = selectedLocation => {
    setLocation(selectedLocation);
  };

  console.log("values",
  companyName,
  // founder,
  email,
  password,
  phone,
  address,
  location
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
      }}>
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
          }}>
          Register
        </Text>
      </View>
      {/* <KeyboardAwareScrollView> */}
      <TextInput
        style={{
          height: 50,
          width: 350,
          backgroundColor: '#eaeaea',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}
        placeholder="Company Name"
        onChangeText={text => setCompanyName(text)}
        value={companyName}
        placeholderTextColor="#38786D"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* <TextInput
        style={{
          height: 50,
          width: 350,
          backgroundColor: '#eaeaea',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}
        placeholder="Founder"
        onChangeText={text => setfounder(text)}
        value={founder}
        placeholderTextColor="#38786D"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
      /> */}
      <TextInput
        style={{
          height: 50,
          width: 350,
          backgroundColor: '#eaeaea',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        placeholderTextColor="#38786D"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={{
          height: 50,
          width: 350,
          backgroundColor: '#eaeaea',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        placeholderTextColor="#38786D"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <TextInput
        style={{
          height: 50,
          width: 350,
          backgroundColor: '#eaeaea',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}
        placeholder="Phone"
        onChangeText={text => setPhone(text)}
        value={phone}
        placeholderTextColor="#38786D"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={{
          height: 50,
          width: 350,
          backgroundColor: '#eaeaea',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}
        placeholder="Address"
        onChangeText={text => setAddress(text)}
        value={address}
        placeholderTextColor="#38786D"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity onPress={handleSelectLocation}>
        <View
          style={{
            height: 50,
            width: 350,
            backgroundColor: '#eaeaea',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {location ? (
            <>
              <Text
                style={{
                  color: '#38786D',
                  fontSize: 16,
                }}>
                Done
              </Text>
            </>
          ) : (
            <Text
              style={{
                color: '#38786D',
                fontSize: 16,
              }}>
              Select Location
            </Text>
          )}
        </View>
      </TouchableOpacity>
      {/* <TextInput
        style={{
          height: 50,
          width: 350,
          backgroundColor: '#eaeaea',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}
        placeholder="Location"
        onChangeText={text => setLocation(text)}
        value={location}
        placeholderTextColor="#38786D"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
      /> */}
      {/* </KeyboardAwareScrollView> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
          }}>
          Already have an account?
        </Text>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={{
            color: '#112B54',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {' '}
          Login
        </Text>
      </View>
      <Pressable
        onPress={() => {
          mutate({
            companyName,
            // founder,
            email,
            password,
            phone,
            address,
            location,
          });
        }}
        style={{
          height: 50,
          width: 350,
          backgroundColor: '#38786D',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          shadowColor: '#38786D',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Register
        </Text>
      </Pressable>
    </View>
  );
}
