import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {TextInput, Checkbox} from 'react-native-paper';
import {AuthContext} from '../Component/AuthProvider';

const ForgetPasswordScreen = ({navigation}) => {
  const {resetPassword} = useContext(AuthContext);
  const [email, setEmail] = useState('');

  return (
    // <Text>Password screen</Text>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: '#fff', height: 1000}}>
        <Image
          source={require('../images/undraw_Forgot_password_re_hxwm.png')}
          style={{
            width: '100%',
            height: 250,
            marginTop: 100,
          }}
        />
        <View style={styles.ImageBottomStyle}>
          <View style={{marginTop: 60, marginLeft: 30}}>
            <Text style={styles.textStyle}>Forgot</Text>
            <Text style={styles.textStyle}>Password?</Text>
            <Text style={styles.textStyle2}>
              Don't worry! it happens. please enter the
            </Text>
            <Text style={styles.textStyle2}>
              address associated with your account.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              onChangeText={userEmail => setEmail(userEmail)}
              mode={'outlined'}
              selectionColor={'black'}
              activeOutlineColor={'#c729e3'}
              outlineColor={'#1666f0'}
              // style={{width: '90%', color: 'pink'}}
              style={styles.inputField}
            />
          </View>
          <View style={{marginTop: 60, width: '80%', alignSelf: 'center'}}>
            <Button
              title="Submit"
              color={'purple'}
              onPress={() => {
                if (email == '') alert('Please enter valid email address! ');
                else {
                  resetPassword(email);
                }
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginTop: 30,
  },
  inputField: {
    width: '90%',
  },
  Button: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBottomStyle: {
    width: '100%',
    height: 640,
    marginTop: -10,
    paddingLeft: 5,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 200,
    shadowColor: '#8A46E9',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 15,
  },
  textStyle: {
    color: '#6722bd',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 2,
    lineHeight: 30,
  },
  textStyle2: {
    color: '#7e24ed',
  },
});

export default ForgetPasswordScreen;
