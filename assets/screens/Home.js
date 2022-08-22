import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  // console.log("Yes Home its working Fine : \n",navigation);

  // LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
  // LogBox.ignoreAllLogs(); //Ignore all log notifications

  const cardData = [
    {
      key: 1,
      title: 'Greeting',
      image: require('../images/undraw_Conversation_re_c26v.png'),
      color: 'pink',
    },
    {
      key: 2,
      title: 'Alphabets',
      image: require('../images/abcd.jpg'),
      color: '#93ad3d',
    },
    {
      key: 3,
      title: 'Questions',
      image: require('../images/undraw_Questions_re_1fy7.png'),
      color: '#9acff5',
    },
    {
      key: 4,
      title: 'Numbers',
      image: require('../images/number.jpg'),
      color: '#de53ed',
    },
  ];

  const circleScrollData = [
    {
      key: 5,
      title: 'Text To Sign',
      image: require('../images/sign_of_the_horns_light_skin_tone_48px.png'),
      screen: 'TextToSign',
    },
    {
      key: 6,
      title: 'Speech to Text',
      image: require('../images/speech_to_text_30px.png'),
      screen: 'SpeechToText',
    },
    {
      key: 7,
      title: 'Text To Speech',
      image: require('../images/speechtotext.png'),
      screen: 'TextToSpeech',
    },
  ];

  return (
    // <View style={styles.container}>
    //   <TouchableWithoutFeedback
    //     onPress={() => navigation.navigate('Rtc_Screen')}>
    //     <Image source={Socialize} style={styles.RTCstyle} />
    //   </TouchableWithoutFeedback>

    //   <TouchableWithoutFeedback
    //     onPress={() => navigation.navigate('Socialize')}>
    //     <Image source={RTC} style={styles.RTCstyle} />
    //   </TouchableWithoutFeedback>
    // </View>

    <ScrollView style={{backgroundColor: '#fff'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Rtc_Screen')}
        style={{
          marginTop: 3,
          marginBottom: 10,
          width: 400,
          height: 250,
          alignSelf: 'center',
          backgroundColor: '#fff',
          borderRadius: 15,
          borderColor: 'purple',
          elevation: 3,
        }}>
        <Image
          source={require('../images/camera.png')}
          style={{width: '100%', height: 220, borderRadius: 10}}
          resizeMode="contain"
        />
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
          }}>
          REAL TIME COMMUNICATION
        </Text>
      </TouchableOpacity>

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
          width: 403.5,
          height: 103,
          borderRadius: 15,
          padding: 1, // This should be the border width you want to have
          overflow: 'hidden',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: 400,
            height: 100,
            borderRadius: 15,
            flexWrap: 'wrap',
            alignSelf: 'center',
            elevation: 3,
            backgroundColor: '#fff',
            marginBottom: 5,
            marginTop: 1,
            // borderWidth: 1,
            // borderColor: 'red',
          }}>
          {circleScrollData.map(circleData => (
            <View key={circleData.key}>
              <TouchableOpacity
                onPress={() => navigation.navigate(circleData.screen)}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  // borderWidth: 1,
                  elevation: 1,
                  borderColor: '#c118f0',
                  marginLeft: 45,
                  padding: 8,
                  marginTop: 5,
                  backgroundColor: '#fff',
                }}>
                <Image
                  resizeMode="contain"
                  source={circleData.image}
                  style={{width: 50, height: 60, borderRadius: 50}}
                />
              </TouchableOpacity>
              <Text
                style={{alignSelf: 'center', marginLeft: 30, color: '#000'}}>
                {circleData.title}
              </Text>
            </View>
          ))}
        </View>
      </LinearGradient>

      {/* <FlatList
        data={cardData}
        numColumns={2}
        style={styles.FlatlistStyle}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.title)}
            key={item.key}
            style={{
              width: 190,
              height: 210,
              borderRadius: 20,
              backgroundColor: '#fff',
              marginLeft: 10,
              marginTop: 8,
            }}>
            <Image
              source={item.image}
              style={{
                width: 'auto',
                height: 175,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                paddingTop: 5,
                fontSize: 18,
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      /> */}

      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 25}}>
        {cardData.map(item => (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate(item.title)}
            style={{
              width: 190,
              height: 210,
              borderRadius: 20,
              backgroundColor: '#fff',
              marginLeft: 10,
              marginTop: 10,
              // shadowOffset: {width: 5, height: 2},
              // shadowOpacity: 5,
              shadowColor: 'purple',
              elevation: 6,
              borderColor: 'black',
              borderWidth: 0.1,
            }}>
            <Image
              source={item.image}
              style={{
                width: 'auto',
                height: 175,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderColor: 'red',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                paddingTop: 5,
                fontSize: 18,
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FlatlistStyle: {
    // padding: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
});

export default Home;
