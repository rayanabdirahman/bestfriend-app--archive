import React from 'react';
import * as styled from './styled';

const ScreenContainer: React.FC = ({ children }) => {
  return <styled.container>{children}</styled.container>;
};

export default ScreenContainer;
