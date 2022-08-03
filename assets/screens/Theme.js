import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Theme = () => {
  return (
    <View style={styles.container}>
      <Text>Theme</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Theme;
