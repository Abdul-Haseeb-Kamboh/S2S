import React, {Component, useState , useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Button, Checkbox, Avatar} from 'react-native-paper';
import {useTogglePasswordVisibility} from '../core/useTogglePasswordVisibility';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../Component/AuthProvider';

const SignUpScreen = ({navigation}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {register} = useContext(AuthContext);
  const {passwordVisibility, rightIcon, handlePasswordVisibility} = useTogglePasswordVisibility();
  




  const see = require('../images/eye_24px.png');
  return (
    <>
      <View>
        <ImageBackground
          source={require('../images/bgTop.png')}
          style={styles.imageStyle}>
          <Text style={styles.TextStyle}>SIGN UP</Text>
          <View style={styles.Whitecontainer}>
            <Avatar.Icon size={90} icon={'folder'} style={{marginTop: 10}} />
            {/* <TextInput
              label="Username"
              mode={'outlined'}
              selectionColor={'black'}
              activeOutlineColor={'#c729e3'}
              outlineColor={'#1666f0'}
              style={{width: '90%', color: 'pink', marginTop: 10}}
            /> */}

            <TextInput
              label="Email"
              mode={'outlined'}
              selectionColor={'black'}
              activeOutlineColor={'#c729e3'}
              outlineColor={'#1666f0'}
              onChangeText={userEmail => setEmail(userEmail)}
              style={{width: '90%', color: 'pink', marginTop: 15}}
            />

            <View style={[styles.inputContainer]}>
              <TextInput
                style={styles.inputField}
                label="Password"
                onChangeText={userPassword => setPassword(userPassword)}
                mode={'outlined'}
                selectionColor={'black'}
                activeOutlineColor={'#c729e3'}
                outlineColor={'#1666f0'}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordVisibility}
                enablesReturnKeyAutomatically
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

            <TouchableOpacity
              style={{
                width: '90%',
                marginTop: 60,
              }}
              // onPress={() => alert('Working Login Button')}
              onPress={() => {
                if (email == '' || password == '')
                  alert('Please Enter Valid User and password');
                else {
                  register(email, password);
                  // alert("Account Was Created")
                }
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
                  SIGN UP
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <Text style={{marginTop: 40, marginBottom: 10}}>
              Already have an account?{' '}
              <Text
                style={{color: '#DA0B55'}}
                onPress={() => navigation.navigate('Signin')}>
                Sign In
              </Text>
            </Text>
            <Text>Privacy Policy </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <Avatar.Icon size={70} icon="facebook" style={{margin: 10}} />
              <Avatar.Icon size={70} icon="twitter" style={{margin: 10}} />
              <Avatar.Icon size={70} icon="instagram" style={{margin: 10}} />
              {/* <Avatar.Icon size={50} icon="facebook" /> */}
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
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
    fontFamily: 'monospace',
    // marginTop:150
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    // borderWidth:1, borderColor:'red',
  },
  inputField: {
    width: '90%',
  },
  Whitecontainer: {
    position: 'absolute',
    top: 150,
    //   justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
    borderTopRightRadius: 90,
    borderTopLeftRadius: 90,
    width: '90%',
    height: '300%',
    backgroundColor: '#fff',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});

export default SignUpScreen;
