import styled from 'styled-components/native';
import { TextProps, TitleProps, FeedbackTextProps } from './index';

export const text = styled.Text<TextProps>`
  font-size: 14px;
  color: ${({ type, theme }) =>
    type === 'secondary' ? theme.color.gray : theme.color.black};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const title = styled.Text<TitleProps>`
  /* font-size: 20px; */
  font-size: ${({ level }) => (level === 2 ? '18px' : '20px')};
  font-family: ${({ theme }) => theme.font.family.bold};
  margin-bottom: 8px;
`;

export const feedbackText = styled.Text<FeedbackTextProps>`
  font-size: 12px;
  color: ${({ type, theme }) =>
    type === 'error' ? theme.color.error : theme.color.success};
`;
