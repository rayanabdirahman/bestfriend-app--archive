import React from 'react';
import { IButtonProps } from 'native-base';
import * as styled from './styled';

export type Props = IButtonProps & {
  type?: 'primary' | 'secondary' | 'link';
  block?: boolean;
  disabled?: boolean;
};

const Button: React.FC<Props> = (props) => {
  const BUTTON_TYPE =
    props.type === 'link'
      ? 'link'
      : props.type === 'secondary'
      ? 'outline'
      : 'solid';

  return (
    <styled.button
      {...props}
      borderRadius={4}
      disabled={props.disabled}
      variant={BUTTON_TYPE}
    >
      {props.children}
    </styled.button>
  );
};

export default Button;
