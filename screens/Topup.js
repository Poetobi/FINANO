import React, { useState } from 'react';
import { Text, View, navigation,  TextInput, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const TopUpScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState('airtime');


  const handleTopUp = ({navigation}) => {

    // TODO: handle top-up logic
  };
  
  
  return (
    <ImageBackground source={require('../assets/images/bg2.png')} style={styles.container}>
<View style={styles.top}>

<TouchableOpacity onPress={() => navigation.navigate('User')}>
<View style={styles.box}>
<Icon name="chevron-left" size={18} color="lightgray"  solid={false} />
</View>
</TouchableOpacity>
<Text style={styles.transfer}>
Seamless Pay
</Text>

<View style={styles.grp}>  
<Icon name="circle" size={8}  color="lightgray"  solid={false}  />
<Icon name="circle" size={8} color="lightgray" solid={false} />

</View>
</View>

      
    <Image
  source={require('../assets/images/Payment.png')} style={{width: 250, height: 250}} 
  resizeMode='contain' 
/>


      <Text style={styles.heading}>Top up your way to financial freedom with our fast and secure platform!</Text>

      <View style={styles.optionsBox}>
        <TouchableOpacity
          onPress={() => setSelectedOption('airtime')}
          style={[
            styles.optionButton,
            { backgroundColor: selectedOption === 'airtime' ? '#00ce4b' : '#FFFFFF' },
          ]}
        >
          <Text
            style={[
              styles.optionText,
              { color: selectedOption === 'airtime' ? '#FFFFFF' : '#000000' },
            ]}
          >
             Airtime
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedOption('data')}
          style={[
            styles.optionButton,
            { backgroundColor: selectedOption === 'data' ? '#00ce4b' : '#FFFFFF' },
          ]}
        >
          <Text
            style={[
              styles.optionText,
              { color: selectedOption === 'data' ? '#FFFFFF' : '#000000' },
            ]}
          >
            Buy Data
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedOption('bills')}
          style={[
            styles.optionButton,
            { backgroundColor: selectedOption === 'bills' ? '#00ce4b' : '#FFFFFF' },
          ]}
        >
          <Text
            style={[
              styles.optionText,
              { color: selectedOption === 'bills' ? '#FFFFFF' : '#000000' },
            ]}
          >
            Pay Bills
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.inputField}
      />

      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.inputField}
      />

      <TouchableOpacity onPress={handleTopUp} style={styles.topUpButton}>
        <Text style={styles.topUpButtonText}>Top Up Now</Text>
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

  optionsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#00ce4b',
    // borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  optionButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: 'center',

  },

  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
        fontFamily: 'Sora',

    },

    inputField: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontFamily: 'Sora',

    },

    topUpButton: {
    backgroundColor: '#00ce4b',
    width: '90%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    },

    topUpButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Sora',

    },

  top: {

    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 370,
    marginTop: -20,
    marginBottom: 50,

        
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
    
    export default TopUpScreen;
