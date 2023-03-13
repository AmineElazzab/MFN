import React from 'react'
import { Text, View, Button, } from 'react-native'

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />  
    </View>
  )
}

export default Profile