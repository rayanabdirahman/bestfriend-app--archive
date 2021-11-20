import React from 'react';
import { Spinner, theme } from 'native-base';
import ScreenContainer from '../../templates/ScreenContainer';
import Space from '../Space';

const FullScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Space style={{ height: '100%' }} align="center" justify="center">
        <Spinner size="sm" color={theme.colors.black} />
      </Space>
    </ScreenContainer>
  );
};

export default { FullScreen };
