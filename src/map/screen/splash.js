import React,{useEffect} from 'react';
import {Text, View} from 'react-native';
import { goToMain } from '../routes/navigate';

const Splash = ({navigation}) => {
  
  useEffect(()=>{
    setTimeout(() => {
            goToMain(navigation);
    }, 2000);
  },[])
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;