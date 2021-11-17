import React from 'react';
import * as styled from './styled';

export type TextProps = {
  type?: 'primary' | 'secondary' | 'link';
  center?: boolean;
};

export type TitleProps = { level?: number };

export type FeedbackTextProps = { type?: 'error' | 'success' };

const Text: React.FC<TextProps> = (props) => (
  <styled.text {...props}>{props.children}</styled.text>
);

const Title: React.FC<TitleProps> = (props) => (
  <styled.title {...props}>{props.children}</styled.title>
);

const FeedbackText: React.FC<FeedbackTextProps> = (props) => (
  <styled.feedbackText {...props}>{props.children}</styled.feedbackText>
);

export default { Text, Title, FeedbackText };
