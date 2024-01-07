import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import { MAX_BORDER_RADIUS, PADDING } from './constants';

export const StyledGradient = styled(LinearGradient)<StyledGradientProps>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  height: ${({ height }) => height}px;
`;

type StyledGradientProps = {
  height: number;
};

export const BackgroundItem = styled.View<BackgroundItemProps>`
  background-color: rgba(0, 0, 0, 0.1);
  flex: 1;
  border-radius: ${MAX_BORDER_RADIUS}px;
  padding: ${PADDING}px;
  width: ${({ width }) => width}px;
`;

type BackgroundItemProps = {
  width: number;
};
