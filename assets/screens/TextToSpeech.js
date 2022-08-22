import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Tts from 'react-native-tts';

const TextToSpeech = () => {
  const [text, onChangeText] = useState('');

  const HandleVoice = () => {
    Tts.speak(text);
  };
  return (
    <View>
      <View>
        <TextInput
          style={{
            alignSelf: 'center',
            width: 400,
            height: 500,
            borderWidth: 1,
            marginTop: 5,
            marginBottom: 50,
            borderRadius: 20,
            paddingLeft: 10,
            fontSize: 18,
          }}
          onChangeText={text => onChangeText(text)}
          multiline={true}
          placeholder="Enter your Text here"
        />
      </View>
      <TouchableHighlight
        onPress={HandleVoice}
        style={{
          width: '80%',
          borderWidth: 1,
          borderColor: 'green',
          padding: 10,
          borderRadius: 20,
          backgroundColor: '#51055e',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#fff', letterSpacing: 2}}>Convert in Voice</Text>
      </TouchableHighlight>
    </View>
  );
};

export default TextToSpeech;

const styles = StyleSheet.create({});
