import {View, ScrollView, Image} from 'react-native';
import React from 'react';

const numberData = [
  {
    key: 1,
    image: require('../images/Alphabets/a.png'),
  },
  {
    key: 2,
    image: require('../images/Alphabets/b.png'),
  },
  {
    key: 3,
    image: require('../images/Alphabets/c.png'),
  },
  {
    key: 4,
    image: require('../images/Alphabets/d.png'),
  },
  {
    key: 5,
    image: require('../images/Alphabets/e.png'),
  },
  {
    key: 6,
    image: require('../images/Alphabets/f.png'),
  },
  {
    key: 7,
    image: require('../images/Alphabets/g.png'),
  },
  {
    key: 8,
    image: require('../images/Alphabets/h.png'),
  },
  {
    key: 9,
    image: require('../images/Alphabets/i.png'),
  },
  {
    key: 10,
    image: require('../images/Alphabets/k.png'),
  },
  {
    key: 11,
    image: require('../images/Alphabets/l.png'),
  },
  {
    key: 12,
    image: require('../images/Alphabets/m.png'),
  },
  {
    key: 13,
    image: require('../images/Alphabets/n.png'),
  },
  {
    key: 14,
    image: require('../images/Alphabets/o.png'),
  },
  {
    key: 15,
    image: require('../images/Alphabets/p.png'),
  },
  {
    key: 16,
    image: require('../images/Alphabets/q.png'),
  },
  {
    key: 17,
    image: require('../images/Alphabets/r.png'),
  },
  {
    key: 18,
    image: require('../images/Alphabets/s.png'),
  },
  {
    key: 19,
    image: require('../images/Alphabets/t.png'),
  },
  {
    key: 20,
    image: require('../images/Alphabets/u.png'),
  },
  {
    key: 21,
    image: require('../images/Alphabets/v.png'),
  },
  {
    key: 22,
    image: require('../images/Alphabets/w.png'),
  },
  {
    key: 23,
    image: require('../images/Alphabets/y.png'),
  },
  {
    key: 24,
    image: require('../images/Alphabets/z.png'),
  },
];

const Alphabets = () => {
  return (
    <ScrollView>
      {numberData.map(item => (
        <View key={item.key}>
          <Image source={item.image} style={{width: '100%', height: 420}} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Alphabets;
