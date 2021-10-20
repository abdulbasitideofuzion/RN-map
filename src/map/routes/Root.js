import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './Routes';
import Splash from '../screen/splash';
import BottomTabs from './bottomtabs';

 const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SPLASH}>
      <Stack.Screen component={Splash} name={ROUTES.SPLASH}
      />
      <Stack.Screen component={BottomTabs} name={ROUTES.MAIN}
        options={{headerShown:false}}
        
      />
 
    </Stack.Navigator>
  );
};

export default Root;
