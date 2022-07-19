import React , {useContext} from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SigninScreen from '../screens/SigninScreen';
import Home from '../screens/Home';
import AppStack from './AppStack';
import { AuthContext } from '../Component/AuthProvider';
import SocializeScreen from '../screens/SocializeScreen';
import Icon from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


// console.log(AppStack);
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const LogoutScreen = () =>{
  const {logout} = useContext(AuthContext);
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => logout() } title="LOGOUT" />
    </View>

  )
}

const Setting = () =>{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back home" />
    </View>

  )
}


const Drawer = createDrawerNavigator();

export default function DrawerNavigationMain({navigation}) {
  return (
    // <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="HomeScreen" component={AppStack} options={{title:"HOME" ,drawerIcon:(name , size) =>(
          <FontAwesome5 name="home" size={30} color="black" />
        )}}/>
        <Drawer.Screen name="NOTIFICATIONS" component={NotificationsScreen} options={{headerShown:true, headerTitleAlign:"center",
         drawerIcon:(name , size) =>(
          <Icon name="notification" size={25} color="black" />
        )}}/>
        <Drawer.Screen name="SETTING" component={Setting} options={{headerShown:true , headerTitleAlign:"center",
         drawerIcon:(name , size) =>(
          <Icon name="setting" size={25} color="black" />
         )
        }} />
        <Drawer.Screen name="LOGOUT" component={LogoutScreen} options={{headerShown:true , headerTitleAlign:"center",
         drawerIcon:(name , size) =>(
          <SimpleLineIcons name="logout" size={25} color="black" />
        )}} />

      </Drawer.Navigator>
    // </NavigationContainer>
  );
}