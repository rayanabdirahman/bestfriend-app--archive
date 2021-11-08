import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Incubator, View } from 'react-native-ui-lib';
import { AuthTemplate, Button, Space, Typography } from '../../../components';
import { AuthStackParamList } from '../../../navigation/domain/interfaces';
import { AuthStackScreenNamesEnum } from '../../../navigation/domain/enums';
import AuthFormTemplate from '../../../components/templates/AuthFormTemplate';
import theme from '../../../styles/constants/theme';
import { TextInput } from 'react-native';
const { TextField } = Incubator;

type Props = NativeStackScreenProps<
  AuthStackParamList,
  AuthStackScreenNamesEnum.SIGN_UP_FORM_NAME
>;

const SignUpFormNameScreen: React.FC<Props> = ({ navigation }) => {
  const inputRef = React.useRef<TextInput>();
  const [name, setName] = React.useState<string>();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <AuthFormTemplate
      title="What's your name?"
      subTitle="Enter your full name to continue"
    >
      <View row bottom style={{ marginBottom: 36 }}>
        <TextField
          ref={inputRef as any}
          placeholder="Full name"
          containerStyle={{ flex: 1 }}
          fieldStyle={{
            borderBottomWidth: 1,
            borderColor: theme.color.lightgray,
            paddingBottom: 4
          }}
          onChangeText={(value) => setName(value)}
        />
      </View>

      <Space justify="center" direction="horizontal" align="center">
        <Button
          onPress={() =>
            navigation.navigate(AuthStackScreenNamesEnum.SIGN_UP_FORM_USERNAME)
          }
          type="primary"
          block
          disabled={name ? false : true}
        >
          Next
        </Button>
      </Space>
    </AuthFormTemplate>
  );
};

export default SignUpFormNameScreen;
