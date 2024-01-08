import Mapbox from '@rnmapbox/maps';
import { StatusBar } from 'expo-status-bar';
import { useWindowDimensions, View } from 'react-native';

import { Env } from 'utils';

Mapbox.setAccessToken(Env.MAPBOX_PUBLIC_KEY);

export default function HomeScreen() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <StatusBar style="dark" />
      <View style={{ width, height }}>
        <Mapbox.MapView style={{ flex: 1 }} />
      </View>
    </>
  );
}
