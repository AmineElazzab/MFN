import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useContext} from 'react';
import m from '../assets/img/landing.jpg';
import Cargo from '../assets/img/cargo.jpg';
import {CredentialsContext} from '../components/CredentialsContext';

export default function Landing({navigation}) {
  const {storedCredentials, setStoredCredentials} =
    useContext(CredentialsContext);
  console.log(storedCredentials);
  return (
    <ImageBackground
      source={Cargo}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
       
      }}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pages', {screen: 'Home'})}
            style={{
              backgroundColor: '#1C3C62',
              // borderRadius: 30,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              marginTop: 20,
              width: 70,
              alignItems: 'center',
              shadowColor: '#C4D1D5',
              shadowOffset: {width: 0, height: 5},
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '600',
                padding: 5,
                // marginTop: 20,
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
            width:'100%',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Welcom to MFN
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            We are here to help you
          </Text>
        </View>
        {storedCredentials ? (
          <View style={{flex: 1}} />
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Auth', {screen: 'Login'})}
              style={{
                // backgroundColor: '#C4D1D5',
                borderColor: '#C4D1D5',
                borderWidth: 1,
                padding: 10,
                borderRadius: 30,
                marginTop: 20,
                width: 160,
                alignItems: 'center',
                shadowColor: '#C4D1D5',
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                Loginn
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Auth', {screen: 'Register'})}
              style={{
                // backgroundColor: '#C4D1D5',
                borderColor: '#C4D1D5',
                borderWidth: 1,
                padding: 10,
                borderRadius: 30,
                marginTop: 20,
                width: 160,
                alignItems: 'center',
                shadowColor: '#C4D1D5',
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    width:'100%'
    // backgroundColor: '#1C3C62',
    
    // opacity: 0.5,
  },
});
