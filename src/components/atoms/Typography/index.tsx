import React from 'react';
import * as styled from './styled';

export type TextProps = {
  type?: 'primary' | 'secondary' | 'link';
  center?: boolean;
};

export type TitleProps = { level?: number };

const Text: React.FC<TextProps> = (props) => (
  <styled.text {...props}>{props.children}</styled.text>
);

const Title: React.FC<TitleProps> = (props) => (
  <styled.title {...props}>{props.children}</styled.title>
);

export default { Text, Title };
