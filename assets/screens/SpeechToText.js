import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  SafeAreaView,
  ActivityIndicator,
  LogBox,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Voice from '@react-native-community/voice';

const SpeechToText = () => {
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen like exit the screen or navigate to other screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = e => {
    setStarted('True');
  };
  const onSpeechEnd = () => {
    setStarted(null);
    setEnd('True');
  };
  const onSpeechError = e => {
    setError(JSON.stringify(e.error));
  };
  const onSpeechResults = e => {
    setResults(e.value);
  };
  const onSpeechPartialResults = e => {
    setPartialResults(e.value);
  };
  const onSpeechVolumeChanged = e => {
    setPitch(e.value);
  };

  const startSpeechRecognizing = async () => {
    setLoading(true);
    setPitch('');
    setError('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
    setEnd('');
    try {
      await Voice.start('en-US', {
        EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS: 50000,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const stopSpeechRecognizing = async () => {
    setLoading(false);
    try {
      await Voice.stop();
      setStarted(null);
    } catch (e) {
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#000',
            fontWeight: '900',
            textShadowColor: 'rgba(181, 5, 230,1)',
            // textShadowColor: 'green',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
            letterSpacing: 5,
            fontSize: 18,
            marginTop: 20,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 50,
            padding: 5,
          }}>
          Speech to Text Conversion
        </Text>

        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>{`Started: ${started}`}</Text>
          <Text style={styles.textWithSpaceStyle}>{`End: ${end}`}</Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.textWithSpaceStyle}>{`Pitch: \n ${pitch}`}</Text>
          <Text style={styles.textWithSpaceStyle}>{`Error: \n ${error}`}</Text>
        </View>

        <Text style={styles.textStyle}>Partial Results</Text>
        <LinearGradient
          colors={[
            '#00FFFF',
            '#17C8FF',
            '#329BFF',
            '#4C64FF',
            '#6536FF',
            '#8000FF',
            '#1ffa14',
            '#1ffa14',
            '#f20530',
            '#f20530',
            '#f76707',
            '#f76707',
            '#00FFFF',
            '#17C8FF',
            '#329BFF',
            '#1ffa14',
            '#1ffa14',
            '#1ffa14',
            '#f76707',
            '#f76707',
            '#f20530',
            '#f20530',
            '#f76707',
            '#00FFFF',
            '#17C8FF',
            '#329BFF',
            '#4C64FF',
          ]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            width: 408,
            height: 304,
            borderRadius: 15,
            padding: 2, // This should be the border width you want to have
            overflow: 'scroll',
            alignSelf: 'center',
          }}>
          <ScrollView
            style={{
              borderWidth: 1,
              width: 405,
              height: 300,
              backgroundColor: '#fff',
              borderRadius: 15,
            }}>
            {partialResults.map((result, index) => {
              return (
                <Text key={`partial-result-${index}`} style={styles.textStyle}>
                  {result}
                </Text>
              );
            })}
          </ScrollView>
        </LinearGradient>

        {/* <Text style={styles.textStyle}>Results</Text>

        <View
          style={{marginBottom: 42, borderWidth: 1, width: 300, height: 100}}>
          <ScrollView>
            {results.map((result, index) => {
              return (
                <Text key={`result-${index}`} style={styles.textStyle}>
                  {result}
                  {console.log(result)}
                </Text>
              );
            })}
          </ScrollView>
        </View> */}

        {isLoading ? (
          <ActivityIndicator
            size={'large'}
            color={'purple'}
            style={{marginTop: 80}}
          />
        ) : (
          <TouchableHighlight
            onPress={startSpeechRecognizing}
            style={{marginTop: 80}}>
            <Image
              style={styles.imageButton}
              source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
              }}
            />
          </TouchableHighlight>
        )}
        <Text style={styles.textStyle}>Press mike to start Recognition</Text>

        <View style={styles.horizontalView}>
          <TouchableHighlight
            onPress={stopSpeechRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Stop</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={cancelRecognizing}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={destroyRecognizer}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Destroy</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    textAlign: 'center',
    padding: 12,
  },
  imageButton: {
    width: 50,
    height: 50,
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: 'center',
    color: '#B0171F',
  },
});

export default SpeechToText;
