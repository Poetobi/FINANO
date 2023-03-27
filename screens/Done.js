import React, { useState } from 'react';
import { View, Button, Text, TextInput, Image, StyleSheet, SafeAreaView, TouchableHighlight, ImageBackground, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import LinearGradient from 'react-native-linear-gradient';





const Done = ({navigation}) => {


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

        <TouchableOpacity onPress={() => navigation.navigate('Receive')}>
      <View style={styles.box}>
      <Icon name="chevron-left" size={18} color="lightgray"  solid={false} />
      </View>
    </TouchableOpacity>
      <Text style={styles.transfer}>
        Payment
      </Text>

     <View style={styles.grp}>  
     <Icon name="circle" size={8}  color="lightgray"  solid={false}  />
        <Icon name="circle" size={8} color="lightgray" solid={false} />

        </View>

        
        </View>

        
        
        <View style={styles.rec}>
         <View style={styles.gums}><Text style={styles.success}>Payment Successful</Text>
         <Icon name="check" size={22} color="white"  solid={false} />
</View> 
<Text  style={styles.amount}>$3,658.77</Text>
<View style={styles.line}></View>

<Text  style={styles.bank}>Bank Name</Text>       
<View style={styles.gum}>
<Text  style={styles.type}>Halifax Bank</Text>
<Icon name="bank" size={18} color="white"  solid={false} />
</View>
<View style={styles.line}></View>

<Text  style={styles.receiver}>Sender’s Name</Text>
<View style={styles.gum}>
<Text  style={styles.id}>Catherine Webb</Text>
<Icon name="user" size={22} color="white"  solid={false} />
</View>
<View style={styles.line}></View>
<Text  style={styles.receiver}>Account Number</Text>
<View style={styles.gum}>
<Text  style={styles.id}>002 533 7222</Text>
<Icon name="money" size={22} color="white"  solid={false} />
</View>



<View style={styles.block}>
  <Text style={styles.text}>Before clicking the transfer button, it is important to double-check the recipient's name, account number, and bank details to ensure that they are accurate. Additionally, it's a good idea to verify that the amount you're transferring is correct and matches the amount you intend to send. Taking these extra precautions can help ensure a smooth and hassle-free transfer of funds and prevent any unnecessary stress or frustration in the future.</Text>
</View>
</View>

  <View style={styles.btnContainer}>
    <Button onPress={()=> navigation.navigate('')} title="Transfer" color="#fff" Size='6' style={styles.btn}></Button>
  </View>



        </ImageBackground>

  )
}


const styles = StyleSheet.create({

    container: { 
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
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

    success: {
      color: 'white',
      fontSize: 20,
      marginBottom: 50,
      marginBottom: 20,
      fontFamily: 'Sora'
    },

    text: {
      color: 'white',
      fontSize: 9,
      width: 350,
      marginTop: 100,
      lineHeight: 15,
      textAlign: 'center',
      marginLeft: -20
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



 

  rec: {
    width: 350,
    height: 420,
    backgroundColor: '#484848',
    borderRadius: 30,
    marginBottom: 120,
    padding: 20,
    paddingTop: 40
  }, 

  amount: {
    fontSize: 40,
    fontFamily: 'Unbounded',
    color: '#fff'

  },


  line: {
    height: 1,
    width: '95%',
    marginTop: 10,
  backgroundColor: '#01d54c',
  },

  bank: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    fontFamily: 'Sora'
  },

  type: {
    fontSize: 25,
    color: '#fff',
    marginTop: 0,
    fontFamily: 'Sora'
  },

  receiver: {
    fontSize: 15,
    color: '#fff',
    marginTop: 10,
    fontFamily: 'Sora'
  },

  id: {
    fontSize: 25,
    color: '#fff',
    marginTop: 2,
    fontFamily: 'Sora'
  },
  

  info: {
    fontSize: 10,
    color: 'gray',
    marginTop: 2,
    marginBottom: 30,
    fontFamily: 'Sora',
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'justify',
    lineHeight: 15,

  },
  
  gum: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: '90%'

  },

  gums: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: '90%'

  },


btnContainer: {
  width: '80%',
  marginBottom: 100,
  marginTop: 50,
  borderRadius: 12,
  backgroundColor: '#01d54c',
},

});


  


export default Done
