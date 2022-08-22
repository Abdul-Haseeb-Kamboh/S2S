import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import SigninScreen from '../screens/SigninScreen';
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
import Greeting from '../screens/Greeting';
import Alphabets from '../screens/Alphabets';
import Questions from '../screens/Questions';
import Numbers from '../screens/Numbers';
import SpeechToText from '../screens/SpeechToText';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextToSign from '../screens/TextToSign';
import TextToSpeech from '../screens/TextToSpeech';

const AppStack = ({navigation}) => {
  // console.log("AppStack navigation working :", navigation);
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
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
        options={{
          headerLeft: () => (
            <Icon
              name="bars"
              size={22}
              color="black"
              onPress={() => navigation.toggleDrawer()}
              style={{marginLeft: 4}}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
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
      <Stack.Screen name="Greeting" component={Greeting} />
      <Stack.Screen name="Alphabets" component={Alphabets} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Numbers" component={Numbers} />
      <Stack.Screen name="SpeechToText" component={SpeechToText} />
      <Stack.Screen name="TextToSign" component={TextToSign} />
      <Stack.Screen name="TextToSpeech" component={TextToSpeech} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppStack;
