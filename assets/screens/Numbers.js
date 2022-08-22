import {View, ScrollView, Image} from 'react-native';
import React from 'react';

const numberData = [
  {
    key: 1,
    image: require('../images/numberspics/one.png'),
  },
  {
    key: 2,
    image: require('../images/numberspics/two.png'),
  },
  {
    key: 3,
    image: require('../images/numberspics/three.png'),
  },
  {
    key: 4,
    image: require('../images/numberspics/four.png'),
  },
  {
    key: 5,
    image: require('../images/numberspics/five.png'),
  },
  {
    key: 6,
    image: require('../images/numberspics/six.png'),
  },
  {
    key: 7,
    image: require('../images/numberspics/seven.png'),
  },
  {
    key: 8,
    image: require('../images/numberspics/eight.png'),
  },
  {
    key: 9,
    image: require('../images/numberspics/nine.png'),
  },
  {
    key: 10,
    image: require('../images/numberspics/ten.jpg'),
  },
];

const Numbers = () => {
  return (
    <ScrollView>
      {numberData.map(item => (
        <View key={item.key}>
          <Image source={item.image} style={{width: '100%', height: 600}} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Numbers;
