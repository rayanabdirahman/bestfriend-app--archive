import React from 'react';
import Space from '../../atoms/Space';
import Typography from '../../atoms/Typography';
import ScreenContainer from '../ScreenContainer';

type Props = { title: string; subTitle?: string };

const AuthFormTemplate: React.FC<Props> = ({ title, subTitle, children }) => {
  return (
    <ScreenContainer>
      <Space style={{ flex: 1, marginTop: 24 }}>
        <Space style={{ marginBottom: 56 }}>
          <Typography.Title level={2}>{title}</Typography.Title>
          <Typography.Text type="secondary">{subTitle}</Typography.Text>
        </Space>

        {children}
      </Space>
    </ScreenContainer>
  );
};

export default AuthFormTemplate;
