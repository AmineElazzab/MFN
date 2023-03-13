import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import m from '../assets/img/landing.jpg';

export default function Landing({navigation}) {
  return (
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
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            fontWeight: '600',
            marginTop: 20,
          }}>
          Skip
        </Text>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={m}
          style={{
            width: 400,
            height: 500,
          }}
        />
      </View>
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
            backgroundColor: '#38786D',
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
            width: 160,
            alignItems: 'center',
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
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Auth', {screen: 'Register'})}
          style={{
            backgroundColor: '#38786D',
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
            width: 160,
            alignItems: 'center',
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
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
{
  /* <View style={[
    styles.container,
    {flexDirection:'row'}
]}>
    <View
    style={{
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        // marginTop: 20,
        width: '100%',
        // backgroundColor: '#38786D',
        // flex:0
        }}
    >
        <Text>
            Skip
        </Text>
    </View>
    <View
    style={{
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 20,
        width: '100%',
        // backgroundColor: '#38786D',
        flex:1
        }}
    >
  <Image
    source={m}
    style={{
      width: 300,
      height: 300,
    }}
  />
  <Text
    style={{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#38786D',
    }}>
    Welcome to MFN
  </Text>
  <Text
    style={{
      fontSize: 18,
      color: '#38786D',
    }}>
    Your one stop shop for all your medical needs
  </Text>
  
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 20,
    }}>
    <TouchableOpacity
      onPress={() => navigation.navigate('Auth')}
      style={{
        backgroundColor: '#38786D',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: 160,
        alignItems: 'center',
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
        Login
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('Pages')}
      style={{
        backgroundColor: '#38786D',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: 160,
        alignItems: 'center',
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
        Skip
      </Text>
    </TouchableOpacity>
  </View>
  </View>
</View> */
}
