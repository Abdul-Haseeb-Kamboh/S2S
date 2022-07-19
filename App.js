import React , { useContext }from 'react';
import {View, Text} from 'react-native';
import SigninScreen from './assets/screens/SigninScreen';
import SignUpScreen from './assets/screens/SignUpScreen';
import HomeScreen from './assets/screens/Home';
import RTC_Screen from './assets/screens/RealTimeCommunication';
import SocializeScreen from './assets/screens/SocializeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import DrawerNavigationMain from './assets/core/DrawerNavigationMain';
import ForgetPasswordScreen from './assets/screens/ForgetPasswordScreen';
import {AuthContext , AuthProvider} from './assets/Component/AuthProvider';
import Routes from './assets/core/Routes';
import AppStack from './assets/core/AppStack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      {/* <SplashScreen/> */}
      {/* <SigninScreen/> */}
      {/* <SignUpScreen/> */}



      {/* <AppStack /> */}

      {/* <NavigationContainer> */}
         {/* <DrawerNavigationMain/> */}
      {/* </NavigationContainer> */}

      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </>
  );
};

export default App;
