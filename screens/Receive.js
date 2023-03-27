import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, FlatList, Button, ImageBackground, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';


  
  const TransactionItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
      <Image source={item.image} style={{ width: 30, height: 30, marginRight: 10 , marginTop: 25}} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18 }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: '#fff' }}>{item.subtitle}</Text>
      </View>
      <Text style={{ fontSize: 18 }}>{item.price}</Text>
    </View>
  );

const Slider = ({navigation}) => {


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
Payment Received
</Text>

<View style={styles.grp}>  
<Icon name="circle" size={8}  color="lightgray"  solid={false}  />
<Icon name="circle" size={8} color="lightgray" solid={false} />

</View>
</View>

<View style={styles.bell}>
<Icon name="bell" size={18} color="red"  solid={false} />
</View>

<View style={styles.rec}>
<Text  style={styles.amount}>$3,658.77</Text>
<View style={styles.line}></View>

<Text  style={styles.bank}>Bank Name</Text>       
<View style={styles.gum}>
<Text  style={styles.type}>Lloyds Bank</Text>
<Icon name="bank" size={18} color="white"  solid={false} />
</View>
<View style={styles.line}></View>

<Text  style={styles.receiver}>Sender’s Name</Text>
<View style={styles.gum}>
<Text  style={styles.id}>Jack Warner</Text>
<Icon name="user" size={22} color="white"  solid={false} />
</View>
<View style={styles.line}></View>
<Text  style={styles.receiver}>Account Number</Text>
<View style={styles.gum}>
<Text  style={styles.id}>992 533 2222</Text>
<Icon name="money" size={22} color="white"  solid={false} />
</View>

<View style={styles.latest }>

<Text style={styles.transaction}>Latest Transaction</Text>
<Text style={styles.see}>See All</Text>



</View>

<Text style={styles.no}>No recents transactions</Text>

          
  </View>

  <View style={styles.btnContainer}>



<Button onPress = {()=> navigation.navigate('')} title="Refresh" color="white" Size='6' style={styles.btn}></Button>
</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  btn: {
    marginTop: 20,
    width: '100%',
    color: '#fff',
    
  },


  btnContainer: {
    width: '70%',
    marginTop: 5,
    marginBottom: 150,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#01d54c',
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

  rec: {
    width: 350,
    height: 330,
    backgroundColor: '#01d54c',
    borderRadius: 30,
    marginBottom: 180,
    padding: 20
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
    backgroundColor: 'black'
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


  latest: {

    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 70,
 

  },

  transaction:  {

    fontFamily:'Sora',
    fontSize: '18',
    color: 'white'
  },

  see:  {

    fontFamily:'Sora',
    fontSize: 18,
    color: 'gray'
  },


  no: {

    fontFamily:'Sora',
    fontSize: '18',
    color: 'gray',
    marginTop: 30,

  },

  bell: {

    backgroundColor: "white",
    borderRadius: "50%",
    width: 40,
    height: 40,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 270,
    marginBottom: -30,
    zIndex: 1,
    position: 'relative'



  }

});

export default Slider;
