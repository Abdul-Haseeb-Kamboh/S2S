import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../Component/AuthProvider';

const Setting = ({navigation}) => {
  // console.log('Setting Navigation : ', navigation.navigate('Theme'));

  const {logout} = useContext(AuthContext);

  const settingData = [
    {
      title: 'Notifications',
      icon: 'notifications-circle-outline',
      key: 1,
    },
    {
      title: 'Account',
      icon: 'person-circle-outline',
      key: 2,
    },
    {
      title: 'Security',
      icon: 'shield-checkmark-outline',
      key: 3,
    },
    {
      title: 'Help',
      icon: 'help-buoy',
      key: 4,
    },
    {
      title: 'About',
      icon: 'information-circle-outline',
      key: 5,
    },
    {
      title: 'Theme',
      icon: 'color-palette-outline',
      key: 6,
    },
  ];

  return (
    <>
      <FlatList
        style={{backgroundColor: '#fff'}}
        data={settingData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.title)}
            style={{
              backgroundColor: '#fff',
              height: 50,
              paddingLeft: 10,
              marginTop: 8,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Icon
              name={item.icon}
              size={35}
              color={'#000'}
              style={{paddingTop: 8}}
            />
            <Text style={{paddingTop: 14, paddingLeft: 15, color: 'black'}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Text
        style={{
          color: '#058dfc',
          backgroundColor: '#fff',
          position: 'absolute',
          top: '50%',
          paddingLeft: '5%',
        }}>
        Account Center
      </Text>
      <Text
        style={{
          backgroundColor: '#fff',
          color: '#575957',
          position: 'absolute',
          top: '55%',
          paddingLeft: '5%',
          lineHeight: 25,
        }}>
        {`Control settings for connected experiences across S2S
The S2S App And other Social app , including Story and
post sharing and logging in.`}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          backgroundColor: '#fff',
          color: '#000',
          position: 'absolute',
          top: '75%',
          paddingLeft: '5%',
        }}>
        Logins
      </Text>
      <Text
        onPress={() => logout()}
        style={{
          color: '#058dfc',
          backgroundColor: '#fff',
          position: 'absolute',
          top: '83%',
          marginLeft: '5%',
          fontWeight: 'bold',
          fontSize: 15,
          shadowColor: 'purple',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 15,
          borderRadius: 50,
          padding: 20,
        }}>
        Log out
      </Text>
    </>

    //     settingData.map(item => (
    //       <TouchableOpacity
    //         key={item.key}
    //         onPress={() => navigation.navigate(item.title)}
    //         style={{
    //           backgroundColor: '#fff',
    //           height: 50,
    //           paddingLeft: 10,
    //           marginTop: 8,
    //           display: 'flex',
    //           flexDirection: 'row',
    //         }}>
    //         <Icon
    //           name={item.icon}
    //           size={30}
    //           color={'#000'}
    //           style={{paddingTop: 8}}
    //         />
    //         <Text style={{paddingTop: 14, paddingLeft: 10, color: 'black'}}>
    //           {item.title}
    //         </Text>
    //       </TouchableOpacity>
    //     ))
  );
};

export default Setting;
