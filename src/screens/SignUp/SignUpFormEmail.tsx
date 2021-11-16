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
  AuthStackScreenNamesEnum.SIGN_UP_FORM_EMAIL
>;

const SignUpFormEmailScreen: React.FC<Props> = ({ navigation }) => {
  const inputRef = React.useRef<TextInput>();
  const [email, setEmail] = React.useState<string>();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <AuthFormTemplate
      title="What's your email?"
      subTitle="Enter your email address to continue"
    >
      <View row bottom style={{ marginBottom: 36 }}>
        <TextField
          ref={inputRef as any}
          placeholder="Email"
          containerStyle={{ flex: 1 }}
          fieldStyle={{
            borderBottomWidth: 1,
            borderColor: theme.color.lightgray,
            paddingBottom: 4
          }}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <Button
        onPress={() =>
          navigation.navigate(AuthStackScreenNamesEnum.SIGN_UP_FORM_PASSWORD)
        }
        type="primary"
        block
        disabled={email ? false : true}
      >
        Next
      </Button>
    </AuthFormTemplate>
  );
};

export default SignUpFormEmailScreen;
