import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ROUTES} from './Routes';
import {Home} from '../screen/home';
import {Map} from '../screen/map';
import {Menu} from '../screen/menu';

const TabsBottom = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <TabsBottom.Navigator
        initialRouteName={ROUTES.HOME}
        barStyle={{ backgroundColor: '#694fad' }}
    >
      <TabsBottom.Screen name={ROUTES.HOME} component={Home} />
      <TabsBottom.Screen name={ROUTES.MAP} component={Map} />
      <TabsBottom.Screen name={ROUTES.MENU} component={Menu} />
    </TabsBottom.Navigator>
  );
};

export default BottomTabs;