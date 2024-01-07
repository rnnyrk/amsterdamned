import { useGlobalSearchParams } from 'expo-router';

import { Container } from 'common/layout';
import { Text } from 'common/typography';

export default function SlugScreen() {
  const params = useGlobalSearchParams();

  return (
    <Container>
      <Text
        color="primaryText"
        size={28}
        style={{ paddingLeft: 20 }}
      >
        {params.slug}
      </Text>
    </Container>
  );
}
