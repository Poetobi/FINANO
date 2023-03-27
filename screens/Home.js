import React from 'react';
import {
  StatusBar, View, Button, Text, Image, StyleSheet, SafeAreaView,TouchableOpacity, ImageBackground,} from 'react-native';
import { useFonts } from 'expo-font';

const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    roc: require('../assets/fonts/roc.otf'),
    rocbold: require('../assets/fonts/rocbold.otf'),
    rocsem: require('../assets/fonts/rocsem.otf'),
    Sora: require('../assets/fonts/Sora.ttf'),
    Unbounded: require('../assets/fonts/Unbounded.ttf'),
    // add more fonts as needed
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <ImageBackground
        source={require('../assets/images/bg2.png')}
        style={styles.backgroundImage}>
        <Image
          source={require('../assets/images/finano.png')}
          style={{ width: 70, height: 100 }}
          resizeMode="contain"
        />
        <Text style={styles.white}>FINANO </Text>
        {/* <Button onPress = {()=> navigation.navigate('Login')} title="Next Screen"   color="grey"></Button> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.text}>Start Here</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  white: {
    color: '#fff',
    fontSize: 26,
    marginTop: -10,
    fontFamily: 'rocsem',
  },
  text: {
    color: 'gray',
    marginTop: 100,
    width: 100,
    height: 20,
    borderWidth: 0.7,
    borderColor: 'gray',
    borderRadius: 10,
    paddingLeft: 15,
  },
});

export default Home;
