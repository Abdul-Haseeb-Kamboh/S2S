import {View, ScrollView, Image} from 'react-native';
import React from 'react';

const QuestionsData = [
  {
    key: 1,
    image: require('../images/questions/one.jpeg'),
  },
  {
    key: 2,
    image: require('../images/questions/two.jpeg'),
  },
  {
    key: 3,
    image: require('../images/questions/three.jpeg'),
  },
  {
    key: 4,
    image: require('../images/questions/four.jpeg'),
  },
  {
    key: 5,
    image: require('../images/questions/five.jpeg'),
  },
  {
    key: 6,
    image: require('../images/questions/six.jpeg'),
  },
  {
    key: 7,
    image: require('../images/questions/seven.jpeg'),
  },
];

const Questions = () => {
  return (
    <ScrollView>
      {QuestionsData.map(item => (
        <View key={item.key}>
          <Image source={item.image} style={{width: '100%', height: 400}} />
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

export default Questions;
