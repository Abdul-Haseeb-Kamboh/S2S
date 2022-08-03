import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Rtc_Screen from './RealTimeCommunication';

const Home = ({navigation}) => {
  // console.log("Yes Home its working Fine : \n",navigation);

  const RTC = require('../images/ReatTimeCommunication.png');
  const Socialize = require('../images/socializeimage.png');
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Rtc_Screen')}>
        <Image source={Socialize} style={styles.RTCstyle} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Socialize')}>
        <Image source={RTC} style={styles.RTCstyle} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  RTCstyle: {
    width: '100%',
    height: '50%',
  },
  Socializestyle: {
    width: '100%',
    height: '50%',
  },
});

export default Home;
