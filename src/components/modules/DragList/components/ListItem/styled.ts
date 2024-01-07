import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { HEIGHT, PADDING } from '../../constants';

export const AnimatedListItem = styled(Animated.View)`
  height: ${HEIGHT}px;
  margin: ${PADDING}px;
  flex: 1;
  flex-direction: row;
  padding-right: 10px;
  padding-left: 10px;
  background-color: white;
`;

export const PressableItem = styled.Pressable`
  flex: 1;
  flex-direction: row;
  padding-right: 10px;
  padding-left: 10px;
`;

export const IconContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export const Icon = styled.View<IconProps>`
  height: 55%;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ color }) => color};
`;

type IconProps = {
  color: string;
};

export const IconText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: gray;
`;

export const StatusContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StatusItem = styled.View<StatusItemProps>`
  height: 25px;
  width: 25px;
  border-radius: 10px;
  background-color: ${({ color }) => `${color}`};
  opacity: ${({ opacity }) => opacity};
  transform: scale(${({ scale }) => scale});
`;

type StatusItemProps = {
  color: string;
  opacity: number;
  scale: number;
};
