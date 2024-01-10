import { useRef, useState } from 'react';
import Mapbox from '@rnmapbox/maps';
import { useWindowDimensions, View } from 'react-native';

import { useFormattedLocations } from 'queries/locations/format';
import { Env } from 'utils';

import { Marker } from './Marker';

Mapbox.setAccessToken(Env.MAPBOX_PUBLIC_KEY);

const AMS_COORDINATES = [4.89707, 52.377956];

export function MapView() {
  const mapRef = useRef<Mapbox.MapView | null>(null);
  const [currentZoom, setCurrentZoom] = useState(10);

  const { height, width } = useWindowDimensions();
  const locations = useFormattedLocations();

  console.log({ locations });

  function onCameraChange(state: Mapbox.MapState) {
    const newZoom = state.properties.zoom;
    setCurrentZoom(newZoom);
  }

  return (
    <View style={{ width, height }}>
      <Mapbox.MapView
        ref={mapRef}
        style={{ flex: 1 }}
        logoEnabled={false}
        rotateEnabled={false}
        scaleBarEnabled={false}
        onCameraChanged={onCameraChange}
      >
        <Mapbox.Camera
          defaultSettings={{
            centerCoordinate: AMS_COORDINATES,
            zoomLevel: currentZoom,
          }}
          minZoomLevel={8}
          maxZoomLevel={18}
        />

        {locations?.map((location) => (
          <Mapbox.MarkerView
            key={location.id}
            coordinate={[location.long, location.lat]}
          >
            <Marker zoom={currentZoom} />
          </Mapbox.MarkerView>
        ))}
      </Mapbox.MapView>
    </View>
  );
}
