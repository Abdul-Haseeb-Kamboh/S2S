import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import SigninScreen from './assets/screens/SigninScreen';
import SignUpScreen from './assets/screens/SignUpScreen';
import HomeScreen from './assets/screens/Home';
import RTC_Screen from './assets/screens/RealTimeCommunication';
import SocializeScreen from './assets/screens/SocializeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import DrawerNavigationMain from './assets/core/DrawerNavigationMain';
import ForgetPasswordScreen from './assets/screens/ForgetPasswordScreen';
import {AuthContext, AuthProvider} from './assets/Component/AuthProvider';
import Routes from './assets/core/Routes';
import AppStack from './assets/core/AppStack';

import {useNavigation, NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <AuthProvider>
      {/* <SplashScreen/> */}
      {/* <SigninScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <AppStack /> */}
      {/* <NavigationContainer> */}
      {/* <DrawerNavigationMain/> */}
      {/* </NavigationContainer> */}
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
