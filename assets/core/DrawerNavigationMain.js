import React , {useContext} from 'react';
import { Button, View } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppStack from './AppStack';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import CustomDrawer from './CustomDrawer';
import Setting from '../screens/Setting';

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

// const LogoutScreen = () => {
//   const {logout} = useContext(AuthContext);
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button onPress={() => logout()} title="LOGOUT" />
//     </View>
//   );
// };

const Drawer = createDrawerNavigator();

export default function DrawerNavigationMain(data) {
  // console.log('received props :', data);
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
      }}
      drawerContent={props => <CustomDrawer {...props} userdata={data} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={AppStack}
        options={{
          title: 'HOME',
          drawerIcon: ({color}) => (
            <FontAwesome name="home" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="NOTIFICATIONS"
        component={NotificationsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          drawerIcon: ({color}) => (
            <Icon name="notification" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SETTING"
        component={Setting}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          drawerIcon: ({color}) => (
            <Icon name="setting" size={25} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="LOGOUT"
        component={LogoutScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          drawerIcon: ({color}) => (
            <SimpleLineIcons name="logout" size={25} color={color} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}