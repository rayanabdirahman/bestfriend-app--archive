import styled from 'styled-components/native';
import { Button } from 'native-base';
import { Props } from '.';

export const button = styled(Button)<Props>`
  background-color: ${({ type, disabled, theme }) =>
    disabled === true
      ? theme.color.disabledgray
      : type === 'primary'
      ? theme.color.brand
      : 'transparent'};
  margin-bottom: ${({ type }) => (type !== 'link' ? '16px' : '0px')};
  width: ${({ block }) => (block === true ? '100%' : 'auto')};
  border-color: ${({ type, theme }) =>
    type === 'secondary' ? theme.color.lightgray : 'transparent'};
  padding: ${({ type }) => (type === 'link' ? '0' : '10px')};
`;
