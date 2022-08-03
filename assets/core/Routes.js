import React, {useContext, useState, useEffect } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../Component/AuthProvider';

import DrawerNavigationMain from './DrawerNavigationMain';
import SigninScreen from '../screens/SigninScreen';
import AppStack from './AppStack';
import InitialStack from './InitialStack';
// import AuthStack from './AuthStack';
// import AppStack from './AppStack';

const Routes = ({navigation}) => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <DrawerNavigationMain data={{user}} /> : <InitialStack />}
    </NavigationContainer>
  );
};

export default Routes;