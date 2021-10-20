import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView, {
  AnimatedRegion,
  Marker,
  Overlay,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {useEffect} from 'react';
import {image} from '../assets/images/faisal_hills_design.png';
const region = {
  latitude: 33.710865,
  longitude: 72.791919,
  latitudeDelta: 0,
  longitudeDelta: 0,
};

const COORDINATE1 = [33.549352, 73.121912];
const COORDINATE2 = [33.549427, 73.122625];

const c1 = [33.694229, 72.747816]; 
const c2 = [33.723162, 72.815302];

const c3 = [33.724217, 72.816077];
const c4 = [33.5598, 73.12213446137193];

export const Map = () => {
  return (
    <MapView style={styles.map} region={region}>
      {/* <Overlay
        image={'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'}
        bounds={[c1, c2]}
        width={200}
        height={300}
      /> */}
      <Overlay
        image={require('../assets/images/faisal_hills_design.png')}
        bounds={[c1, c2]}
        // location={region}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
});

