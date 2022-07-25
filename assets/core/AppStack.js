import {View, Text} from 'react-native';
import React from 'react';

import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SigninScreen from '../screens/SigninScreen';
import Home from '../screens/Home';
const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Signin">
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
              size={20}
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
      {/* <Stack.Screen name="Rtc_Screen" component={RTC_Screen} />
      <Stack.Screen name="Socialize" component={SocializeScreen} /> */}
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{headerTitleAlign: 'center', title: 'Forgot Password'}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
