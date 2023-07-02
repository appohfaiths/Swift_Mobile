import React, {FC, useMemo, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import ScreenStyles from './styles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {LOGO, SIGNUP_BACKGROUND} from '../../assets/images';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const WelcomeScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => ScreenStyles(), []);

  const [userData, setUserDate] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onCreateAccountPress = () => {
    navigation.navigate('SignupScreen');
  };
  const onLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleUsernameChange = e => {
    setUserDate({...userData, email: e.target.value});
    console.log(userData);
  };
  const handleEmailChange = e => {
    setUserDate({...userData, email: e.target.value});
    console.log(userData);
  };
  const handlePasswordChange = e => {
    setUserDate({...userData, password: e.target.value});
    console.log(userData);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={SIGNUP_BACKGROUND}
        resizeMode="cover"
        style={styles.background}>
        <Image source={LOGO} style={styles.logo} />
        <Text style={styles.text}>Create an account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={handleUsernameChange}
            value={userData.email}
            placeholder="Username"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={handleEmailChange}
            value={userData.email}
            placeholder="Email"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={handlePasswordChange}
            value={userData.password}
            placeholder="Password"
          />
          <Button
            title="Sign up"
            onPress={onCreateAccountPress}
            disabled={false}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text>Already a user?</Text>
          <Pressable onPress={onLoginPress}>
            <Text style={styles.loginText}>Sign in</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
