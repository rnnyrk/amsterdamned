import styled from 'styled-components/native';

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex: 1;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

type ContainerProps = {
  alignItems?: 'flex-start' | 'flex-end' | 'center';
};
