import Mapbox from '@rnmapbox/maps';
import { useWindowDimensions, View } from 'react-native';

import { Env } from 'utils';

Mapbox.setAccessToken(Env.MAPBOX_PUBLIC_KEY);

export function MapView() {
  const { height, width } = useWindowDimensions();

  return (
    <View style={{ width, height }}>
      <Mapbox.MapView
        style={{ flex: 1 }}
        logoEnabled={false}
        rotateEnabled={false}
        scaleBarEnabled={false}
      >
        <Mapbox.Camera
          defaultSettings={{
            centerCoordinate: [4.89707, 52.377956],
            zoomLevel: 10,
          }}
          minZoomLevel={8}
          maxZoomLevel={12}
        />
      </Mapbox.MapView>
    </View>
  );
}
