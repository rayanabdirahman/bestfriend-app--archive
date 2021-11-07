import React from 'react';
import { View } from 'react-native';
import * as styled from './styled';

export type Props = View['props'] & {
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  direction?: 'vertical' | 'horizontal';
};

const Space: React.FC<Props> = (props) => (
  <styled.space {...props}>{props.children}</styled.space>
);

export default Space;
