import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/Home'
import WelcomeScreen from './screens/Welcome'
import LoginScreen from './screens/Login'
import SignScreen from './screens/Sign'
import OtpScreen from './screens/Otp'
import UserScreen from './screens/User'
import TransferScreen from './screens/Transfer'
import ReceiveScreen from './screens/Receive'
import DoneScreen from './screens/Done'
import ReviewScreen from './screens/Review'
import TopupScreen from './screens/Topup'
import RemainScreen from './screens/Remain'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: "black",
    }
  }}
>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: 'FINANO'}}
         
       />
        <Stack.Screen name="Welcome" 
        component={WelcomeScreen} 

        />
          <Stack.Screen name="Login" 
        component={LoginScreen} 
      
        />


<Stack.Screen name="Sign" 
        component={SignScreen} 
    
        />

<Stack.Screen name="Otp" 
        component={OtpScreen} 
    
        />

<Stack.Screen name="User" 
        component={UserScreen} 
        options={{title: 'Dashboard'}}
        />

<Stack.Screen name="Transfer" 
        component={TransferScreen} 
        options={{title: 'Transfer'}}
        />

<Stack.Screen name="Receive" 
        component={ReceiveScreen} 
        options={{title: 'Received'}}
        />


        <Stack.Screen name="Done" 
        component={DoneScreen} 
        options={{title: 'Done'}}
        />


<Stack.Screen name="Review" 
        component={ReviewScreen} 
        options={{title: 'Review'}}
        />

<Stack.Screen name="Topup" 
        component={TopupScreen} 
        options={{title: 'Topup'}}
        />
        
        <Stack.Screen name="Remain" 
        component={RemainScreen} 
        options={{title: 'Remain'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack
