import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from 'common/interaction';
import { Container } from 'common/layout';
import { Text } from 'common/typography';

export default function SettingsScreen() {
  const { top } = useSafeAreaInsets();

  function onNewLocation() {}

  return (
    <Container top={top}>
      <Text
        size={28}
        fontFamily={500}
      >
        Settings
      </Text>

      <Button
        onPress={onNewLocation}
        style={{ marginTop: 16 }}
      >
        Nieuwe locatie aanmaken
      </Button>
    </Container>
  );
}
