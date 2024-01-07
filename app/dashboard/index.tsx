import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from 'common/typography';
import { DragList } from 'modules/DragList';

export default function DashboardScreen() {
  const { top: safeTop, left: safeLeft, right: safeRight } = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />
      <View
        style={{
          paddingTop: safeTop,
          paddingLeft: safeLeft,
          paddingRight: safeRight,
          backgroundColor: 'white',
        }}
      >
        <Text
          color="primaryText"
          size={28}
          style={{ paddingLeft: 20 }}
        >
          Home
        </Text>

        <DragList />
      </View>
    </>
  );
}
