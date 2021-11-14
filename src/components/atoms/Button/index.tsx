import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonProps } from 'react-native-ui-lib';
import * as styled from './styled';

export type Props = ButtonProps & {
  type?: 'primary' | 'secondary' | 'link';
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const Button: React.FC<Props> = (props) => (
  <styled.button
    {...props}
    link={props.type === 'link' ? true : false}
    borderRadius={4}
    outline={props.type === 'secondary' ? true : false}
    disabled={props.disabled}
  >
    <styled.text type={props.type} disabled={props.disabled}>
      {props.loading ? <ActivityIndicator /> : <>{props.children}</>}
    </styled.text>
  </styled.button>
);

export default Button;
