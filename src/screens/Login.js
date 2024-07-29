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

  const isValid = () => {
    if (username.length === 0) {
      console.warn("Please enter user name");
      return false;
    }
    if (password.length === 0) {
      console.warn("Please enter password");
      return false;
    }
    return true;
  }

  const handleLogin = () => {
    if (isValid()) {
      props.navigation.navigate('Main');
    }
  };

  return (

    <View style={styles.container}>
      <Image
        style={{ width: 150, height: 150, marginHorizontal: 100, marginVertical: 60 }}
        source={require('../assets/login.png')}
      ></Image>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 20 }}> Enter Username:</Text>
        <TextInput
          placeholder='Enter User Name'
          style={styles.textFields}
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 20}}>Enter Password:</Text>
        <TextInput
          placeholder='Enter Password'
          secureTextEntry={true}
          style={styles.textFields}
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <View>
          <Text style={styles.text}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    height: "75%",
    width: "80%",
    backgroundColor: "powderblue",
    justifyContent: "center",
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 100,


  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: 15
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 50
  },
  textFields: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  }
})

export default LoginScreen;