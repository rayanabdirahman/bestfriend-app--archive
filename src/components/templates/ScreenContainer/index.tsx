import React from 'react';
import Toast from '../../atoms/Toast';
import * as styled from './styled';

const ScreenContainer: React.FC = ({ children }) => {
  return (
    <styled.container>
      <Toast />
      {children}
    </styled.container>
  );
};

export default ScreenContainer;
