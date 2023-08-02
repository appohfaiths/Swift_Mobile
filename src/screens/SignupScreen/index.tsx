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

const SignupScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => ScreenStyles(), []);

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const onCreateAccountPress = () => {
    if (userData.email !== '' && userData.password !== '') {
      navigation.navigate('HomeScreen');
    } else {
      setShowErrorAlert(!showErrorAlert);
    }
  };
  const onLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleEmailChange = e => {
    setUserData({...userData, email: e.target.value});
    console.log(userData);
  };
  const handlePasswordChange = e => {
    setUserData({...userData, password: e.target.value});
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
          {showErrorAlert && <Text>Please create an account to proceed</Text>}
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

export default SignupScreen;
