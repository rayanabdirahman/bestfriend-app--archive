import React from 'react';
import { ButtonProps } from 'react-native-ui-lib';
import * as styled from './styled';

export type Props = ButtonProps & {
  type?: 'primary' | 'secondary' | 'link';
  block?: boolean;
};

const Button: React.FC<Props> = (props) => (
  <styled.button
    {...props}
    link={props.type === 'link' ? true : false}
    borderRadius={4}
    outline={props.type === 'secondary' ? true : false}
  >
    <styled.text {...props}>{props.children}</styled.text>
  </styled.button>
);

export default Button;
