import React from 'react'
import {View , Text , Image , StyleSheet , SafeAreaView} from 'react-native'



const SplashScreen = () => {
  const BG = require('../images/download.png')
  return (

    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Image
      style={styles.image}
      source={BG}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 200,
        borderRadius:30
    },
  });

export default SplashScreen;