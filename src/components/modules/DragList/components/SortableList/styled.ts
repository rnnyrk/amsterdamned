import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const BackgroundItem = styled.View<BackgroundItemProps>`
  height: ${({ height }) => height}px;
  position: absolute;
  top: ${({ top }) => top}px;
  right: 0;
  left: 0;
  z-index: -50;
  justify-content: center;
  align-items: center;
`;

type BackgroundItemProps = {
  top: number;
  height: number;
};

export const SortableListItem = styled(Animated.View)<SortableListItemProps>`
  height: ${({ height }) => height}px;
  position: absolute;
  right: 0;
  left: 0;
  shadow-color: black;
  shadow-offset: 0px 0px;
  shadow-radius: 10px;
`;

type SortableListItemProps = {
  height: number;
};
