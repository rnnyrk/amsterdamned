import { useRouter } from 'expo-router';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { MAX_BORDER_RADIUS } from '../../constants';
import {
  AnimatedListItem,
  Icon,
  IconContainer,
  IconText,
  PressableItem,
  StatusContainer,
  StatusItem,
  Subtitle,
  TextContainer,
  Title,
} from './styled';

export function ListItem({ activeIndex, index, item }: ListItemProps) {
  const router = useRouter();

  // Use animated style for dynamic styling based on the active index
  const rStyle = useAnimatedStyle(() => {
    return {
      borderRadius: withTiming(activeIndex.value === index ? MAX_BORDER_RADIUS : 5),
    };
  }, [MAX_BORDER_RADIUS, index]);

  return (
    <AnimatedListItem style={rStyle}>
      <PressableItem
        onPress={() =>
          router.push({
            pathname: '/dashboard/[slug]/',
            params: {
              slug: item.title,
            },
          })
        }
      >
        <IconContainer>
          <Icon color={item.color}>
            <IconText>{item.textIcon}</IconText>
          </Icon>
          <TextContainer>
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
          </TextContainer>
        </IconContainer>

        <StatusContainer>
          {new Array(item.activeValues.length).fill(0).map((_, index) => {
            return (
              <StatusItem
                key={index}
                color={item.squareColor ?? item.color}
                opacity={item.activeValues[index] ? 1 : 0.6}
                scale={item.activeValues[index] ? 1 : 0.3}
              />
            );
          })}
        </StatusContainer>
      </PressableItem>
    </AnimatedListItem>
  );
}

export type ItemInfo = {
  title: string;
  subtitle: string;
  activeValues: boolean[];
  color: string;
  squareColor?: string;
  textIcon: string;
};

type ListItemProps = {
  activeIndex: Animated.SharedValue<number | null>;
  index: number;
  item: ItemInfo;
};
