import React from 'react'
import { View, Button, Text, TextInput, Image, StyleSheet, SafeAreaView, TouchableHighlight, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import LinearGradient from 'react-native-linear-gradient';





const Login = ({navigation}) => {


const [fontsLoaded] = useFonts({
    'roc': require('../assets/fonts/roc.otf'),
    'rocbold': require('../assets/fonts/rocbold.otf'),
    'rocsem': require('../assets/fonts/rocsem.otf'),
    'Sora': require('../assets/fonts/Sora.ttf'),
    'Unbounded': require('../assets/fonts/Unbounded.ttf'),
    // add more fonts as needed
  });



    return (

        
        <ImageBackground source={require('../assets/images/bg2.png')} style={styles.container}>
     
<Text style={styles.join}>Access your Finano account from anywhere! </Text>
             
<View>
<View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="Enter Username" style={styles.input} placeholderTextColor={'#999'}       keyboardType="default"
/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label} >Password</Text>
        <TextInput placeholder="Password" style={styles.input} placeholderTextColor={'#999'}  keyboardType="default"
/>
      </View>
      
    </View>

            <View style={styles.btnContainer}>
                    
         <Button onPress = {()=> navigation.navigate('User')} title="Login" color="white" Size='6' style={styles.btn}></Button></View>
      
         <Text style={styles.account}>Don't have an account?</Text>    

      
        <Button onPress = {()=> navigation.navigate('Sign')} title="Create Account" color="#00ce4b" >        <Icon name="arrow" size={30} color="lightgray" />

</Button>
     
        </ImageBackground>

        

  )
}


const styles = StyleSheet.create({

    container: { 
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    bottom: {

        flex: 0,
        flexDirection:  'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        width: '80%',
        marginLeft: 20
    }, 

 

    btn: {

        color: 'gray',
        fontSize: 10,

    }, 


    join: {

      fontSize: 28,
      fontWeight: 'medium',
      marginBottom: 40,
      color: '#fff',
      width: '75%',
      marginTop: -100,
      fontFamily: 'Unbounded',
      textAlign: 'center'
  
  
    },

    inputContainer: {
      marginBottom: 20,
      width: 300,
    },

    input: {
      borderWidth: 1,
      borderColor: '#00ce4b',
      color: '#ffffff',
      borderRadius: 10,
      padding: 15,
      fontSize: 16,
      placeholderTextColor:'#999'

    },


    label: {

      color: 'white',
      fontSize: 18,
      marginBottom: 10
      },
      
      btn: {
        marginTop: 20,
        width: '100%',
        color: '#fff',
        
      },

      btnContainer: {
        width: '70%',
        marginTop: 5,
        marginBottom: 20,
        paddingVertical: 6,
        borderRadius: 12,
        backgroundColor: '#01d54c',
      },


      account: {

        color: 'gray',
        fontSize: 18
  
      },

      userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        },
        userImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        },
        userImage: {
        width: 60,
        height: 60,
        },
        voiceNoteIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 4,
        borderRadius: 8,
        },
        unreadMessagesContainer: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        },
        unreadMessagesText: {
        color: '#fff',
      }


  });
  


export default Login
