import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import React, { useEffect, useState } from 'react';
const LoginScreen = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (

    <View>
      <Image
        style={{ width: 150, height: 150, marginHorizontal: 100, marginVertical: 60 }}
        source={require('../assets/login.png')}
      ></Image>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, verticalAlign: "middle", flex: 0.3 }}> Username:</Text>
        <TextInput
          placeholder='Enter User Name'
          style={{ padding: 10, borderCurve: 5, borderWidth: 1, borderColor: "black", margin: 10, flex: 0.7 }}
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, flex: 0.3, verticalAlign: "middle" }}> Password:</Text>
        <TextInput
          placeholder='Enter Password'
          secureTextEntry={true}
          style={{ borderWidth: 1, borderColor: "black", margin: 10, flex: 0.7 }}
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ width: '50%', height: 50, backgroundColor: 'powderblue', borderRadius: 20, alignSelf: 'center' }}>
        <View>
          <Text style={styles.text}>Login</Text>
        </View>
      </TouchableOpacity>

    </View>

  )
}
const styles = StyleSheet.create({
  text: {
    color: 'black',
    textAlign: 'center',
    marginTop: 15
  }
})

export default LoginScreen;