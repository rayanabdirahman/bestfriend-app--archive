import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ScreenContainer, Typography } from '../../components';
import { signOutUserAction } from '../../store/actions/account';

const FeedScreen: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <ScreenContainer>
      <View>
        <Typography.Text>Feed Screen</Typography.Text>
        <Button type="primary" onPress={() => dispatch(signOutUserAction())}>
          Sign out
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default FeedScreen;
