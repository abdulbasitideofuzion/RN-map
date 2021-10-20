import {iteratee} from 'lodash';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import HOME_LIST from '../config';
import SoundCard from '../SoundCard';
export const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={HOME_LIST}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => <SoundCard itemValue={item} />}
      />
    </View>
  );
};
