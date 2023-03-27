import React from 'react'
import { View, Button, Text, TextInput, Image, StyleSheet, SafeAreaView, TouchableHighlight, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import LinearGradient from 'react-native-linear-gradient';





const Sign = ({navigation}) => {


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
     
<Text style={styles.join}>Create new account </Text>
<Text style={styles.form}> Please fill the form to continue </Text>
             
<View>
<View style={styles.inputContainer}>
        <TextInput placeholder="Full Name" style={styles.input} placeholderTextColor={'#999'}/>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email Address" style={styles.input} placeholderTextColor={'#999'}/>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Phone Number" style={styles.input} placeholderTextColor={'#999'}/>
      </View>
      <View style={styles.see}>
        <TextInput placeholder="Password" placeholderTextColor={'#999'}/> 
        <Icon name="eye" size={15} color="lightgray" solid={false} />

      </View> 
      
      
    </View>

    <View style={styles.btnContainer}>
                  <Button onPress = {()=> navigation.navigate('Otp')} title="Sign Up" color="white" Size='6'></Button>
                  </View>
                  <Text style={styles.account}>Already have an account?</Text>    
        <Button onPress = {()=> navigation.navigate('Login')} title="Login" color="#00ce4b" >        <Icon name="arrow" size={30} color="lightgray" />
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
      marginBottom: 10,
      color: '#fff',
      width: '75%',
      marginTop: -100,
      fontFamily: 'Unbounded',
      textAlign: 'center',
    
  
  
    },

    form: {

      fontSize: 15,
      fontWeight: 'medium',
      marginBottom: 50,
      color: 'gray',
      width: '75%',
      fontFamily: 'Sora',
      textAlign: 'center'
  
  
    },


    inputContainer: {
      marginBottom: 10,
      width: 300,
    },

    see: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#00ce4b',
      borderRadius: 10,
      padding: 15,
      fontSize: 16,
      placeholderTextColor:'#999'
      


    },

    input: {
      borderWidth: 1,
      borderColor: '#00ce4b',
      borderRadius: 10,
      padding: 15,
      fontSize: 16,
      placeholderTextColor:'#999'

    },

    btnContainer: {
      width: '70%',
      marginTop: 25,
      marginBottom: 20,
      paddingVertical: 6,
      borderRadius: 12,
      backgroundColor: '#01d54c',
    },



    label: {

      color: 'white',
      fontSize: 18,
      marginBottom: 10
      },

      account: {

        color: 'gray',
        fontSize: 18
  
      }



  });
  


export default Sign
