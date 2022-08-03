<<<<<<< HEAD
import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import SigninScreen from '../screens/SigninScreen'
import SignUpScreen from '../screens/SignUpScreen';
import RTC_Screen from '../screens/RealTimeCommunication';
import SocializeScreen from '../screens/SocializeScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notifications from '../screens/Notifications';
import Account from '../screens/Account';
import Help from '../screens/Help';
import About from '../screens/About';
import Theme from '../screens/Theme';
import Security from '../screens/Security';

// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppStack = ({navigation}) => {
  // console.log("AppStack navigation working :", navigation);
  const Stack = createNativeStackNavigator();
=======
import {View, Text} from 'react-native';
import React from 'react';
>>>>>>> d3300137840867825ae3909a0387dfec67567d15

import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SigninScreen from '../screens/SigninScreen';
import Home from '../screens/Home';
const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
<<<<<<< HEAD
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
=======
    <Stack.Navigator initialRouteName="Signin">
>>>>>>> d3300137840867825ae3909a0387dfec67567d15
      <Stack.Screen
        name="Signin"
        component={() => <SigninScreen props="Hello" />}
        options={{headerShown: false}}
        // children={() => <SigninScreen />}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Icon
              name="bars"
<<<<<<< HEAD
              size={22}
              color="black"
              onPress={() => navigation.toggleDrawer()}
              style={{marginLeft: 4}}
=======
              size={20}
              color="black"
              onPress={() => navigation.toggleDrawer()}
>>>>>>> d3300137840867825ae3909a0387dfec67567d15
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
<<<<<<< HEAD
      <Stack.Screen
        name="Rtc_Screen"
        component={RTC_Screen}
        options={{title: 'Real Time Communication'}}
      />
      <Stack.Screen name="Socialize" component={SocializeScreen} />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{headerTitleAlign: 'center', title: 'Forgot Password'}}
      />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Theme" component={Theme} />
      <Stack.Screen name="Security" component={Security} />
    </Stack.Navigator>
    // </NavigationContainer>
=======
      {/* <Stack.Screen name="Rtc_Screen" component={RTC_Screen} />
      <Stack.Screen name="Socialize" component={SocializeScreen} /> */}
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{headerTitleAlign: 'center', title: 'Forgot Password'}}
      />
    </Stack.Navigator>
>>>>>>> d3300137840867825ae3909a0387dfec67567d15
  );
};

export default AppStack;
