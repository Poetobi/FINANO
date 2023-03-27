import React, { useState } from 'react';
import { View, FlatList, StatusBar, TouchableOpacity, ScrollView, Button, Text, Image, StyleSheet, SafeAreaView, TouchableHighlight, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import LinearGradient from 'react-native-linear-gradient';



const Welcome = ({navigation}) => {

    const [activeBox, setActiveBox] = useState(1);

    const handleButtonPress = () => {
      const nextBox = (activeBox + 1) % 3;
      setActiveBox(nextBox);
      scrollViewRef.current.scrollTo({ x: nextBox * 200, y: 0, animated: true });
    };
  
    const scrollViewRef = React.useRef(null);


const [fontsLoaded] = useFonts({
    'roc': require('../assets/fonts/roc.otf'),
    'rocbold': require('../assets/fonts/rocbold.otf'),
    'rocsem': require('../assets/fonts/rocsem.otf'),
    'Sora': require('../assets/fonts/Sora.ttf'),
    'Unbounded': require('../assets/fonts/Unbounded.ttf'),
    // add more fonts as needed
  });



    return (

        <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="red" barStyle="light-content" />

        <ImageBackground source={require('../assets/images/bg2.png')} style={{flex: 1}}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
            <View style={styles.wrapper}>
        

            <View style={[styles.box,activeBox === 0 && styles.activeBox]}>
            <View style={styles.group}>

<Text style={styles.one}> FINANO</Text> 

<Image
source={require('../assets/images/chip.png')} style={{width: 50, height: 100,}} 
resizeMode='contain' 
/>
</View>


<Text style={styles.john}> John A. Schmidt
</Text>

<View style={styles.grouptwo}>
<Icon name="wifi" size={30} color="#fff" />

<Text style={styles.two}> $4,850</Text> 


</View>
<View style={styles.footer2}>



<Text style={styles.card2}>4012 8888  8888 1881</Text>
<Icon name="cc-visa" size={30} color="lightgray" />

</View>

</View>

<View style={[styles.box1,activeBox === 1 && styles.activeBox]}>

                <View style={styles.group}>

                <Text style={styles.one}> FINANO</Text> 

                <Image
  source={require('../assets/images/chip.png')} style={{width: 50, height: 100,}} 
  resizeMode='contain' 
/>
</View>


    <Text style={styles.john}> John A. Schmidt
</Text>

<View style={styles.grouptwo}>
<Icon name="wifi" size={30} color="#fff" />

                <Text style={styles.two}> $10,850</Text> 

      
</View>
<View style={styles.footer}>

    
        
        <Text style={styles.card}>4012 8888  8888 1881</Text>
        <Icon name="cc-visa" size={30} color="lightgray" />

     </View>

</View>
    
<View style={[styles.box, activeBox === 2 && styles.activeBox]}>
<View style={styles.group}>

<Text style={styles.one}> FINANO</Text> 

<Image
source={require('../assets/images/chip.png')} style={{width: 50, height: 100,}} 
resizeMode='contain' 
/>
</View>


<Text style={styles.john}> John A. Schmidt
</Text>
<Text style={styles.type}> Bureau De' Change</Text>

<View style={styles.grouptwo}>
<Icon name="wifi" size={30} color="#fff" />

<Text style={styles.two}> $19,350</Text> 


</View>
<View style={styles.footer3}>



<Text style={styles.card2}>4012 8888  8888 1881</Text>
<Icon name="cc-visa" size={30} color="lightgray" />

</View>

</View>



                </View>
                </ScrollView>


        <View  style={styles.glue}> 
                <Text style={styles.money}>Easy way to manage money</Text>
                  <Text style={styles.transfer}>Hey! Enjoy seamless transfer, receive your money in a snap.</Text>
                  {/* <View style={styles.flat}>
      <Icon name="circle" size={12} color="#00ce4b" solid={false}       borderRadius={10}  padding={3} borderWidth={1} borderColor="#00ce4b" />
      <Icon name="circle" size={15} color="lightgray" solid={false} />
      <Icon name="circle" size={15} color="lightgray" solid={false} />
      <Icon name="circle" size={15} color="lightgray" solid={false} />
    </View> */}

<FlatList
  horizontal={true}
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.circles}
  data={[{ key: 'box1' }, { key: 'box2' }, { key: 'box3' }]}
  renderItem={({ item, index }) => (
    <View style={[styles.boxes, activeBox === index && styles.activeBox]}>
      <Text style={styles.text}></Text>
    </View>
  )}
/>
                  </View>

             <View style={styles.bottom}>
                  <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>    
      <View style={styles.btnContainer}>
    <Button onPress={()=> navigation.navigate('Login')} title="SKIP" color="gray" Size='6' style={styles.btn}></Button>
  </View>
  </View>
        </ImageBackground>
        </SafeAreaView>

        

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

    safe: {
        flex: 1,
        backgroundColor: 'black', // Change the background color here
      },


    wrapper: { 
      
        // backgroundColor: '#000',
        width: '100%',
        height: 400,
        overflow: 'hidden',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',


        

    },

    type: {

        fontFamily: 'Sora',
        fontSize: 16,
        color: 'white'
    },

    activeBox: {
        backgroundColor: '#00ce4b',
      },

      box: {
        width: 230,
        height: 320,
        borderRadius: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#484848',
        overflow: 'hidden',
      },



         box1: { 
      
        backgroundColor: '#484848',
        width: 300,
        height: 350,
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        paddingTop: 20,
       

    },

    boxes: {
      width: 15,
      height: 15,
      borderRadius: 50,
      marginHorizontal: 10,
      backgroundColor: 'white',
      overflow: 'hidden',
      position: 'relative'
    },

        one: {

            color: 'white',
            fontFamily: 'Unbounded',
            fontSize: 18,
        },


        two: {

            color: 'white',
            fontFamily: 'Unbounded',
            fontSize: 30,
        },

        group: {

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            flex: 0,
            // backgroundColor: 'black',
            width: 250,
            height: 40,
            marginTop: 40,
            paddingLeft: 20,
            paddingRight: 20,


        },

grouptwo: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flex: 0,
    // backgroundColor: 'black',
    width: 250,
    height: 40,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,


},



    white: {
        color: 'grey',
        fontWeight: 'regular',
        fontSize: 20,
       
    }, 


    footer: {

        width: '100%',
        color: 'white',
        height: 80,
        backgroundColor: 'white',
        marginTop: 70,
        flex: 0,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,


    },


    footer2: {
      width: '100%',
      color: 'white',
      height: 90,
      backgroundColor: 'white',
      marginTop: 30,
      flex: 0,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 10,
      paddingHorizontal: 15,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
  


  },




  footer3: {

    width: '100%',
    color: 'white',
    height: 90,
    backgroundColor: 'white',
    marginTop: 30,
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,


},


  card2: {

    color: 'gray',
    fontFamily: 'Sora',
    marginBottom: 0,
},


card3: {

  color: 'gray',
  fontFamily: 'Sora',
  marginBottom: 20,
},


     card: {

        color: 'gray',
        fontFamily: 'Sora' 
    },


    john: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Sora' ,
        marginTop: 10,
        marginLeft: 20,

    }, 

    transfer: {

        color: 'white',
        fontSize: 17,
        fontFamily: 'Sora',
        marginTop: 30,
        
    },


    money: {

        color: 'white',
        fontSize: 30,
        fontFamily: 'Unbounded',
        letterSpacing: -1,
        lineHeight: 35,
    },

    bottom: {

        flex: 0,
        flexDirection:  'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
        width: '80%',
        marginLeft: 20
    }, 

    glue: {


        flex: 1,
        flexDirection:  'column',
        justifyContent: 'space-between',
        alignItems: 'start',
        width: '70%',
        height: 200,
        marginLeft: 20,
        marginTop: -200,
        position: 'relative',



    },

    button: {
        borderRadius: 20,
        padding: 10,
        color: 'white',
        marginLeft: 20

      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Sora',
        fontSize: '16'
      },

 

    circles: {

        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '40%',
        marginBottom: 10,
    }

        


});

export default Welcome
