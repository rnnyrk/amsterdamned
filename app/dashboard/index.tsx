import Mapbox from '@rnmapbox/maps';
import { StatusBar } from 'expo-status-bar';
import { useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Env } from 'utils';
import { Text } from 'common/typography';

Mapbox.setAccessToken(Env.MAPBOX_PUBLIC_KEY);

export default function DashboardScreen() {
  const { height, width } = useWindowDimensions();
  const { top: safeTop, left: safeLeft, right: safeRight } = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />
      <View style={{ width, height }}>
        <Mapbox.MapView style={{ flex: 1 }} />
      </View>
    </>
  );
}
