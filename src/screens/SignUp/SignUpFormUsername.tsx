import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Incubator, View } from 'react-native-ui-lib';
import { AuthTemplate, Button, Space, Typography } from '../../components';
import { AuthStackParamList } from '../../navigation/domain/interfaces';
import { AuthStackScreenNamesEnum } from '../../navigation/domain/enums';
import AuthFormTemplate from '../../components/templates/AuthFormTemplate';
import theme from '../../styles/constants/theme';
import { TextInput } from 'react-native';
const { TextField } = Incubator;

type Props = NativeStackScreenProps<
  AuthStackParamList,
  AuthStackScreenNamesEnum.SIGN_UP_FORM_USERNAME
>;

const SignUpFormUsernameScreen: React.FC<Props> = ({ navigation }) => {
  const inputRef = React.useRef<TextInput>();
  const [username, setUsername] = React.useState<string>();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <AuthFormTemplate
      title="Set your username"
      subTitle="Set the username you want to use to continue"
    >
      <View row bottom style={{ marginBottom: 36 }}>
        <TextField
          ref={inputRef as any}
          placeholder="Username"
          containerStyle={{ flex: 1 }}
          fieldStyle={{
            borderBottomWidth: 1,
            borderColor: theme.color.lightgray,
            paddingBottom: 4
          }}
          onChangeText={(value) => setUsername(value)}
        />
      </View>

      <Space justify="center" direction="horizontal" align="center">
        <Button
          onPress={() =>
            navigation.navigate(AuthStackScreenNamesEnum.SIGN_UP_FORM_EMAIL)
          }
          type="primary"
          block
          disabled={username ? false : true}
        >
          Next
        </Button>
      </Space>
    </AuthFormTemplate>
  );
};

export default SignUpFormUsernameScreen;
