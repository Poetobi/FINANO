import React, { useState } from 'react';
import { Text, View, navigation,  TextInput, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';





const Remain = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState('airtime');




  
  return (
    <ImageBackground source={require('../assets/images/bg2.png')} style={styles.container}>
<View style={styles.top}>

<TouchableOpacity onPress={() => navigation.navigate('User')}>
<Icon name="chevron-left" size={18} color="lightgray"  solid={false} />
</TouchableOpacity>
<Text style={styles.transfer}>
Other Services
</Text>

<View style={styles.grp}>  
<Icon name="circle" size={8}  color="lightgray"  solid={false}  />
<Icon name="circle" size={8} color="lightgray" solid={false} />

</View>
</View>

      
    <Image
  source={require('../assets/images/credit.png')} style={{width: 300, height: 300}} 
  resizeMode='contain' 
/>


      <Text style={styles.heading}>"Unlock limitless financial possibilities with our expanded range of Finano services!"</Text>
      <TouchableOpacity style={styles.box} onPress={() => handlePress('#')}>
        <Text style={styles.text}>Cable</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => handlePress('#')}>
        <Text style={styles.text}>Utilities</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => handlePress('#')}>
        <Text style={styles.text}>Air Tickets</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => handlePress("#")}>
        <Text style={styles.text}>NGO's</Text>
      </TouchableOpacity>

    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'lightgray',
    marginBottom: 20,
    fontFamily: 'Sora',
    width: 320,
    textAlign: 'center',
  },

  box: {
    width: '80%',
    height: 50,
    backgroundColor: '#01d54c',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Sora'
  },


  top: {

    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 370,
    marginTop: -100,
    marginBottom: 0,

        
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



    });
    
    export default Remain
