import React from 'react';
import Space from '../../atoms/Space';
import Typography from '../../atoms/Typography';
import ScreenContainer from '../ScreenContainer';

type Props = { title: string; subTitle: string };

const AuthTemplate: React.FC<Props> = ({ title, subTitle, children }) => {
  return (
    <ScreenContainer>
      <Space style={{ flex: 1, marginTop: 36 }}>
        <Space style={{ marginBottom: 56 }} align="center">
          <Typography.Title>{title}</Typography.Title>
          <Typography.Text type="secondary" center>
            {subTitle}
          </Typography.Text>
        </Space>

        {children}
      </Space>
    </ScreenContainer>
  );
};

export default AuthTemplate;
