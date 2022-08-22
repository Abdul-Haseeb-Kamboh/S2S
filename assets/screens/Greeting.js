import {View, ScrollView, Image} from 'react-native';
import React from 'react';

const GreetingData = [
  {
    key: 1,
    image: require('../images/greeting/one.jpeg'),
  },
  {
    key: 2,
    image: require('../images/greeting/two.jpeg'),
  },
  {
    key: 3,
    image: require('../images/greeting/three.jpeg'),
  },
  {
    key: 4,
    image: require('../images/greeting/four.jpeg'),
  },
  {
    key: 5,
    image: require('../images/greeting/five.jpeg'),
  },
  {
    key: 6,
    image: require('../images/greeting/six.jpeg'),
  },
  {
    key: 7,
    image: require('../images/greeting/seven.jpeg'),
  },
  {
    key: 8,
    image: require('../images/greeting/eight.jpeg'),
  },
  {
    key: 9,
    image: require('../images/greeting/nine.jpeg'),
  },
];

const Greeting = () => {
  return (
    <ScrollView>
      {GreetingData.map(item => (
        <View key={item.key}>
          <Image source={item.image} style={{width: '100%', height: 600}} />
          <View
            style={{
              width: 'auto',
              height: 4,
              backgroundColor: 'purple',
            }}></View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Greeting;
