import React from 'react';
import {Text, View} from 'react-native';

const HomeCard = ({itemValue}) => {
  return (
    <View>
      <Text>{itemValue.title}</Text>
    </View>
  );
};
export default HomeCard;
