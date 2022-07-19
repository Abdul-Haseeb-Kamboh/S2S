import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import SigninScreen from '../screens/SigninScreen'
import SignUpScreen from '../screens/SignUpScreen'
import DrawerNavigationMain from './DrawerNavigationMain'
import RTC_Screen from '../screens/RealTimeCommunication'
import SocializeScreen from '../screens/SocializeScreen'
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5'

const AppStack = ({navigation}) => {
  // console.log("AppStack navigation working :", navigation);
    const Stack = createNativeStackNavigator();


  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerLeft:() =>(
          <Icon name="bars" size={20} color="black" onPress={() => navigation.toggleDrawer()}/>
        ), headerTitleAlign:'center'
      }
      }
      />
      <Stack.Screen name="Rtc_Screen" component={RTC_Screen} />
      <Stack.Screen name="Socialize" component={SocializeScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{headerTitleAlign:'center' , title:"Forgot Password"}}  />
    </Stack.Navigator>
  // </NavigationContainer> 
  )
}

export default AppStack;