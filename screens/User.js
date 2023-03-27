import React, {useState} from 'react'
import { Statusbar, View, Button, Text, TextInput, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Svg, Path } from 'react-native-svg';
import { Sora_500Medium } from '@expo-google-fonts/sora';


const transactions = [
{
  id: 1,
  name: 'Amazon',
  image: require('../assets/icons/amazon.png'),
  subtitle: 'Online Shopping',
  price: '$250.08',
},
{
  id: 2,
  name: 'Paypal',
  image: require('../assets/icons/paypal.png'),
  subtitle: 'Online Shopping',
  price: '$150.65',
},
{
  id: 3,
  name: 'Gotek',
  image: require('../assets/icons/gojek.png'),
  subtitle: 'Online Shopping',
  price: '$350.25',
}
];


const TransactionItem = ({ item }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
    <Image source={item.image} style={{ width: 30, height: 30, marginRight: 10 , marginTop: 25}} />
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18 }}>{item.name}</Text>
      <Text style={{ fontSize: 14, color: '#888' }}>{item.subtitle}</Text>
    </View>
    <Text style={{ fontSize: 18, color: item.price.startsWith('$250') ? 'green' : 'red' }}>
      {item.price}
    </Text>
  </View>
);


const User = ({navigation}) => {


  const [fontsLoaded] = useFonts({
      'roc': require('../assets/fonts/roc.otf'),
      'rocbold': require('../assets/fonts/rocbold.otf'),
      'rocsem': require('../assets/fonts/rocsem.otf'),
      'Sora': require('../assets/fonts/Sora.ttf'),
      'Unbounded': require('../assets/fonts/Unbounded.ttf'),
      // add more fonts as needed
    });
  


  return (
    
    <View  style={styles.container}>


<ImageBackground source={require('../assets/images/bg2.png')}     borderRadius={30}
        overflow="hidden" style={styles.wrapper}>

<View style={styles.user}>

<View style={styles.round}>
<Image
  source={require('../assets/images/user.png')} style={{width: 55, height: 55}} 
  resizeMode='contain' borderRadius='100' backgroundColor='#00ce4b' 
  borderColor='#00ce4b'
/>

</View>

<View style={styles.joined}>
<Text style={styles.name}>Alex Jameson</Text>
<Text style={styles.morning}>Good morning!</Text>
</View>

<View style={styles.double}>

<Icon name="circle" size={8} color="lightgray"  solid={false}  />
      <Icon name="circle" size={8} color="lightgray" solid={false} />
</View>




  </View>

<Text style={styles.total}> Total Balance</Text>
        <Text style={styles.white}>$ 453,586.12 </Text>
        {/* <Button onPress = {()=> navigation.navigate('Login')} title="Next Screen"   color="grey"></Button> */}
        <View style={styles.inputContainer}>
        <TextInput placeholder="Choose Card" style={styles.input} placeholderTextColor={'#999'}/>
      </View>
      <View style={styles.boxes}>

        
                <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
      <View style={styles.box}>
        <Icon name="arrow-up" size={20} color="white" />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Receive')}>
      <View style={styles.box}>
        <Icon name="arrow-down" size={20} color="white" />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Topup')}>
      <View style={styles.box}>
        <View style={styles.plus}>
          <Icon name="plus" size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Remain')}>
      <View style={styles.box}>
        <Icon name="th-large" size={20} color="white" />
      </View>
    </TouchableOpacity>
    </View>

      <View style={styles.write}>

    <Text style={styles.transis}>Transfer</Text>
    <Text style={styles.transis}>Receive</Text>
    <Text style={styles.transis}>Topup</Text>
    <Text style={styles.transis}>More</Text>
    </View>
    <View style={styles.line}>
    {/* <Icon name="minus" size={45} color="gray" /> */}
    </View>

    </ImageBackground>

    <View style={styles.latest }>

      <Text style={styles.transaction}>Latest Transaction</Text>
      <Text style={styles.see}>See All</Text>


    </View>
  <FlatList
    data={transactions}
    renderItem={({ item }) => <TransactionItem item={item} />}
    keyExtractor={(item) => item.id.toString()}
  />

    <View style={styles.footerContainer}>
      <View style={styles.iconContainer}>
      <Icon name="home" size={20} color="#333" />
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome name="bar-chart" size={20} color="#333" />
      </View>
      <View style={[styles.iconContainer, styles.circle]}>
        <Icon name="square" size={25} color="#fff" />
      </View>
    <View style={styles.iconContainer}>

    <Icon name="heart" size={20} color="#333" />
      </View>   
      <View style={styles.iconContainer}>
        <Icon name="user" size={20} color="#333" />
      </View>
    </View>

      </View>
    

  )
}


const styles = StyleSheet.create({

    container: { 
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        height: 400,
 
    },

    wrapper: {
      height: 470,
      width: "100%",
      flex: 0,
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      borderBottomLeftRadius: 30,
      paddingTop: 50,
      borderBottomRightRadius: 30,
       


    },

    white: {
        color: '#fff',
        fontSize: 36,
        marginTop: -10,
        fontFamily: 'Unbounded' 
        

    },

    total: {
      color: 'gray',
      fontSize: 18,
      marginBottom: 20,
      fontFamily: 'Sora' 
      

  },

    text: {

        color: 'gray',
        marginTop: 100, 
        width: 100,
        height: 20,
        borderWidth: 0.7,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 15
    
    },

    name: {

      color: '#fff',
      fontSize: 20,
      fontFamily: 'Sora',
      marginLeft: 10,

    },


    morning: {

      color: 'gray',
      fontSize: 16,
      fontFamily: 'Sora',
      marginLeft: 10,

    },

    user: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      marginBottom: 50,
      width: '100%',
      padding: 10,
      marginTop: -30,
    },

    joined: {

      marginRight: 170,
    },

    double: {
      
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
    
    },

    input: {
      color: 'gray',
      marginTop: 20, 
      width: 150,
      height: 20,
      borderWidth: 0.7,
      borderColor: 'gray',
      borderRadius: 20,
      padding: 15,
      textAlign: 'center'

    },

    round: {

      borderWidth: 5,
      borderColor: 'rgba(116, 178, 116, 0.5)',
      borderRadius: 50,
    },

    four: {

      width: 150,
      height: 50,
      backgroundColor: '#fff'

    },

    tran: {

      color: '#fff',
      fontSize: 6,


    },

    transis: {

      color: '#fff',
      marginRight: 8,
      


    },

    box: {
      width: 70,
      height: 70,
      backgroundColor: '#303030',
      borderRadius: '8',
      flex: 0, 
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',


    },
    
    boxes: {

      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 30,
      marginBottom: 10,
      textAlign: 'center'

      


    },

    write: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '70%',
      marginTop: 35,
      marginRight: 3,
      marginBottom: 10,
      alignItems: 'flex-start',
      alignContent: 'flex-start'
    },

    line: {

      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray',
      height: 5,
      width: 70,
      marginBottom: 30,


    },


    plus: {
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },


    latest: {

      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: 30,

    },

    transaction:  {

      fontFamily:'Sora',
      fontSize: '18',
    },

    see:  {

      fontFamily:'Sora',
      fontSize: 18,
      color: 'gray'
    },



    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTopWidth: 0,
      shadowColor: '#000',
      borderTopColor: '#ccc',
      paddingHorizontal: 20,
      paddingVertical: 40,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
    iconContainer: {
      alignItems: 'center',
    },
    circle: {
      backgroundColor: '#00ce4b',
      borderRadius: 50,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      marginTop: -20,
    },




});


export default User
