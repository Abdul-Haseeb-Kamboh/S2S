import React, {useContext} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Avatar} from 'react-native-paper';
import {AuthContext} from '../Component/AuthProvider';
import Share from 'react-native-share';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  // console.log(
  //   'Props received in Custom is :',
  //   props.userdata.data.user.providerData.displayName,
  // );
  const {logout} = useContext(AuthContext);

  const myCustomShare = async () => {
    const shareOptions = {
      message: 'This is a test Message ',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Errors =>', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        contentContainerStyle={{backgroundColor: '#aa18ec'}}>
        <ImageBackground
          source={require('../images/download.webp')}
          style={{alignItems: 'center', marginTop: -5, padding: 30}}>
          {/* <Image /> */}
          <Avatar.Icon
            size={110}
            icon="cat"
            style={{backgroundColor: '#fff'}}
          />
          <Text
            style={{color: '#fff', fontSize: 14, fontFamily: 'Roboto-Medium'}}>
            {props.userdata.data.user.email}
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={myCustomShare} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="share" size={22} color={'black'} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 32,
                fontWeight: 'normal',
                color: 'black',
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => logout()}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="logout" size={22} color={'black'} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 32,
                fontWeight: 'normal',
                color: 'black',
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
