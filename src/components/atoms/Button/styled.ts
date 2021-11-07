import styled from 'styled-components/native';
import { Button as NativeButton } from 'react-native-ui-lib';
import Typography from '../Typography';
import { Props } from '.';

export const button = styled(NativeButton)<Props>`
  background-color: ${({ type, theme }) =>
    type === 'primary' ? theme.color.brand : 'transparent'};
  margin-bottom: ${({ type }) => (type !== 'link' ? '16px' : '0px')};
  width: ${({ block }) => (block === true ? '100%' : 'auto')};
  border-color: ${({ type, theme }) =>
    type === 'secondary' ? theme.color.lightgray : 'transparent'};
`;

export const text = styled(Typography.Text)<Props>`
  color: ${({ type, theme }) =>
    type === 'link'
      ? theme.color.brand
      : type === 'primary'
      ? theme.color.white
      : theme.color.black};
  font-family: ${({ type, theme }) =>
    type !== 'link' ? theme.font.family.medium : theme.font.family.regular};
`;
