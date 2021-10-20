/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/map/routes/Root';

const App = () => {
  return (
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  );
};
export default App;
