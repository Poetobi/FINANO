
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image} from 'react-native';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleSignup = () => {
    // Handle signup logic here
  };

  
  return (
    
    <ImageBackground source={require('../assets/images/bg2.png')} style={styles.container}>
      <Text style={styles.join}>Enter OTP</Text>

        <Text style={styles.instruct}>A 6 digit code has been sent to your mobile number +1234769490</Text>
  
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="123456"
        secureTextEntry={true}
        placeholderTextColor={'#999'}

      />
       <View style={styles.btnContainer}>
      <Button onPress={handleLogin} title="Verify OTP" style={styles.btn} color="white" /></View>
    <View style={styles.create}>
      <Text style={styles.account}>Request code again 00.59s</Text>    

    {/* <Button onPress = {()=> navigation.navigate('User')} title="User" color="#01d54c" marginTop="20"></Button> */}
    </View>

    <Image
  source={require('../assets/images/finano.png')} style={{width: 70, height: 100}} 
  resizeMode='contain' 
/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
  

  },
  
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    
    },
  input: {
    borderWidth: 1,
    borderColor: '#01d54c',
    padding: 15,
    marginBottom: 20,
    width: '70%',
    borderRadius: 12,
  },
  btn: {
    marginTop: 20,
    width: '100%',
  },

  join: {

    fontSize: 28,
    fontWeight: 'medium',
    marginBottom: 40,
    color: '#fff',
    width: '75%',
    marginTop: -200,
    fontFamily: 'Unbounded',
    textAlign: 'center'


  },

  btnContainer: {
    width: '70%',
    marginTop: 10,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#01d54c',
  },

    account: {

      color: '#ffffff',
      fontSize: 14,
      color: 'gray'

    },

    create: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContents: 'center',
      width: '75%',
      marginTop: 20,
    },

    instruct: {

      fontSize: 18,
      fontWeight: 'medium',
      marginBottom: 40,
      color: 'gray',
      width: '75%',
      fontFamily: 'Sora',
      textAlign: 'center'

    }
});


