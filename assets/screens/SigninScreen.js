import React, {Component, useState, useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Button, Checkbox} from 'react-native-paper';
import {useTogglePasswordVisibility} from '../core/useTogglePasswordVisibility';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Component/AuthProvider';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './SigninScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen';
import {useNavigation} from '@react-navigation/native';

const SigninScreen = () => {
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const see = require('../images/eye_24px.png');
  const Blind = require('../images/blind_48px.png');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const handleNavigation = () => {
    navigation.navigate('ForgetPassword');
  };
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require('../images/bgTop.png')}
          style={styles.imageStyle}>
          <Text style={styles.TextStyle}>SIGN IN</Text>
        </ImageBackground>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <View style={styles.inputContainer}>
          <TextInput
            label="Email"
            // value={text}
            onChangeText={userEmail => setEmail(userEmail)}
            mode={'outlined'}
            selectionColor={'black'}
            activeOutlineColor={'#c729e3'}
            outlineColor={'#1666f0'}
            // style={{width: '90%', color: 'pink'}}
            style={styles.inputField}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            label="Password"
            mode={'outlined'}
            selectionColor={'black'}
            activeOutlineColor={'#c729e3'}
            outlineColor={'#1666f0'}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            enablesReturnKeyAutomatically
            onChangeText={userPassword => setPassword(userPassword)}
          />
          <Pressable
            onPress={handlePasswordVisibility}
            style={{
              alignSelf: 'flex-end',
              position: 'absolute',
              right: 30,
              top: 25,
              zIndex: 1,
            }}>
            <Image source={see} />
            {/* <Ionicons name={rightIcon} size={22} color="#232323" /> */}
          </Pressable>
        </View>
        <Pressable onPress={() => handleNavigation()}>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginRight: 22,
              marginTop: 8,
              color: 'blue',
            }}>
            Forget Password?
          </Text>
        </Pressable>
        <TouchableOpacity
          style={{
            width: '90%',
            marginTop: 60,
          }}
          onPress={() => {
            if (email == '' || password == '')
              alert('Please Enter Valid User and password');
            else login(email, password);
          }}>
          <ImageBackground
            style={styles.button}
            source={require('../images/buttonbg.png')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold',
                letterSpacing: 5,
              }}>
              SIGN IN
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <Text
          style={{marginTop: 200}}
          onPress={() => navigation.navigate('SignUp')}>
          Don’t have an account? <Text style={{color: '#DA0B55'}}>Sign Up</Text>
        </Text>
        <Text>Privacy Policy </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    color: '#fff',
    fontSize: 34,
    marginTop: 130,
    fontFamily: 'monospace',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // marginTop: 30,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  inputField: {
    width: '90%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
});

export default SigninScreen;
