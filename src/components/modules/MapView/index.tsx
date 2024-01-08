import Mapbox from '@rnmapbox/maps';
import { useWindowDimensions, View } from 'react-native';

import { Env } from 'utils';

Mapbox.setAccessToken(Env.MAPBOX_PUBLIC_KEY);

export function MapView() {
  const { height, width } = useWindowDimensions();

  return (
    <View style={{ width, height }}>
      <Mapbox.MapView style={{ flex: 1 }} />
    </View>
  );
}
