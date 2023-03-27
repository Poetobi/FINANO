import React, { useState } from 'react';
import { View, Button, Text, TextInput, Image, StyleSheet, SafeAreaView, TouchableHighlight, ImageBackground, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import LinearGradient from 'react-native-linear-gradient';





const Transfer = ({navigation}) => {


  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleDeleteButton = () => {
    setInputValue(inputValue.slice(0, -1));
  };


const [fontsLoaded] = useFonts({
    'roc': require('../assets/fonts/roc.otf'),
    'rocbold': require('../assets/fonts/rocbold.otf'),
    'rocsem': require('../assets/fonts/rocsem.otf'),
    'Sora': require('../assets/fonts/Sora.ttf'),
    'Unbounded': require('../assets/fonts/Unbounded.ttf'),
    // add more fonts as needed
  });



    return (

<ImageBackground source={require('../assets/images/bg2.png')}
        overflow="hidden" style={styles.container}>
        
        <View style={styles.top}>

        <TouchableOpacity onPress={() => navigation.navigate('User')}>
      <View style={styles.box}>
      <Icon name="chevron-left" size={18} color="lightgray"  solid={false} />
      </View>
    </TouchableOpacity>
      <Text style={styles.transfer}>
        Transfer
      </Text>

     <View style={styles.grp}>  
     <Icon name="circle" size={8}  color="lightgray"  solid={false}  />
        <Icon name="circle" size={8} color="lightgray" solid={false} />

        </View>
        </View>

        <View style={styles.user}>

        <View style={styles.round}>
        <Image
          source={require('../assets/images/user.png')} style={{width: 80, height: 80, }} 
          resizeMode='contain' borderRadius='100' backgroundColor='#00ce4b' 
          borderColor='#00ce4b' 
        />
        
        </View>
        
       
        <Text style={styles.name}>Alex Smith Jameson</Text>
        {/* <Text style={styles.morning}>Good morning!</Text> */}
     
        
          </View>

          <Text style={styles.total}> HSBC - 4877 5742 1705 1049</Text>
      {/* <TextInput style={styles.amount}>$180,62</TextInput>
   */}


<View style={styles.inputContainer}>
  <TextInput
    style={styles.inputValue}
    value={inputValue}
    onChangeText={setInputValue}
    placeholder="$00.00"
    keyboardType="numeric"
    placeholderTextColor="lightgray"
  />
</View>
<View style={styles.buttonContainer}>
  {[...Array(9)].map((_, i) => (
    <TouchableOpacity
      key={i}
      style={styles.button}
      onPress={() => handleButtonClick(i+1)}
    >
      <Text style={styles.buttonText}>{i+1}</Text>
    </TouchableOpacity>
  ))}
  <TouchableOpacity
    style={styles.button}
    onPress={() => handleButtonClick('.')}
  >
    <Text style={styles.buttonText}>.</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.button}
    onPress={() => handleButtonClick(0)}
  >
    <Text style={styles.buttonText}>0</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.deleteButton}
    onPress={handleDeleteButton}
  >
    <Text style={styles.deleteButtonText}> <Icon name="close" size={18} color="lightgray"  solid={false} /></Text>
  </TouchableOpacity>
  <View style={styles.btnContainer}>
    <Button onPress={()=> navigation.navigate('Review')} title="Transfer" color="#fff" Size='6' style={styles.btn}></Button>
  </View>
</View>


        </ImageBackground>

  )
}


const styles = StyleSheet.create({

    container: { 
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    top: {

      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      width: 370,
      marginTop: 50,

          
    },

    transfer: {
      color: '#fff',
      fontFamily: 'Unbounded',
      fontSize: 20,
    },

    grp: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 20,
      
    },


    name: {

      color: '#fff',
      fontSize: 20,
      fontFamily: 'Sora',
      marginLeft: 10,
      marginTop: 10

    },

    user: {
      flex: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      width: '100%',
      padding: 10,


   

    },

    round: {
      borderWidth: 5,
      borderColor: 'rgba(116, 178, 116, 0.5)',
      borderRadius: 50,
   
    },

    joined: {

      marginTop: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',

    },


    total: {
      color: 'gray',
      fontSize: 18,
      marginBottom: 30,
      fontFamily: 'Sora',
      

  },


  inputContainer: {

    padding: 10,
    marginBottom: 150,
    // backgroundColor: 'red',
  

    
  },
  inputValue: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Sora',
    marginTop: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 260,
    height: 450,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#333',
    marginTop: -150,
  },


  button: {
    borderWidth: 0,
    padding: 20,
    margin: 5,
    borderRadius: 5,
    justifyContent:  'space-between',
    alignItems: 'center',
    alignContent: 'center',

  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Sora',
    justifyContent:  'space-between',
    alignItems: 'center',
    alignContent: 'center',

  },

  deleteButton: {
    borderWidth: 'none',
    borderColor: '#fff',
    padding: 3,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    // backgroundColor: '#01d54c',
  },
  deleteButtonText: {
    fontSize: 10,
    color: 'white',
  },



  btnContainer: {
    width: '100%',
    marginTop: 20,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#01d54c',
  },

  });
  


export default Transfer
